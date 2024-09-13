import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';
import { LikesService } from '../../services/likes.service';
import { NotificationDialogComponent } from '../notification-dialog/notification-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  likesCount: number = 0;
  hasLiked: boolean = false;
  errorMessage: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService,
    private likesService: LikesService,
    private router: Router,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // Retrieve the ID from the route parameters
    const postId = this.route.snapshot.paramMap.get('id');
    console.log('Post ID from route:', postId);  // Log the ID to check

    if (postId) {
      this.postsService.getPost(postId).subscribe({
        next: (data) => {
          console.log('Post data received:', data);  // Log the retrieved post data
          this.post = data;
          this.loadLikesCount(postId); 
        },
        error: (err) => {
          console.error('Error fetching post:', err);
        }
      });
    } else {
      console.error('No post ID found in the route.');
    }
  }

  editPost(): void {
    if (this.post?.id) {
      this.router.navigate(['/edit', this.post.id]);  // Navigate to the edit page
    }
  }

  deletePost(): void {
    if (this.post?.id) {
      if (confirm('delete really?')) {  // Confirm deletions
        this.postsService.deletePost(this.post.id).subscribe(() => {
          this.router.navigate(['/']);  // Navigate back to homepage after deletion
        });
      }
    }
  }

  loadLikesCount(postId: string): void {
    this.likesService.getLikesCount(postId).subscribe((response) => {
      this.likesCount = response.count;
    });
  }

  likePost(): void {
    if (this.post?.id) {
      this.likesService.addLike(this.post.id).subscribe({
        next: () => {
          this.hasLiked = true;
          this.likesCount += 1;  // Increment the likes count
        },
        error: (err) => {
          if (err.status === 400 && err.error.message === 'You have already liked this post') {
            this.showNotification('You have already liked this post.');
          } else {
            console.error('Error liking post:', err);
          }
        }
      });
    }
  }

  showNotification(message: string): void {
    this.dialog.open(NotificationDialogComponent, {
      width: '300px',
      data: { message: message }
    });
  }

}