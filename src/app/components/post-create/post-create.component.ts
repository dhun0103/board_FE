import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.scss'
})
export class PostCreateComponent {
  post: Post = {
    id: '',
    title: '',
    content: '',
    author: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    view: 0
  };
  isEditMode = false;

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.isEditMode = true;
      this.postsService.getPost(postId).subscribe((data) => {
        this.post = data;
      });
    }
  }

  publishPost(): void {
    if (this.post.author && this.post.title && this.post.content) {
      this.postsService.createPost(this.post).subscribe({
        next: () => {
          // Navigate back to the home page after publishing
          this.router.navigate(['/posts']);
        },
        error: (err) => {
          console.error('Error creating post:', err);
          alert('Failed to create post. Please try again.');
        }
      });
    } else {
      alert('Please fill in all fields before publishing.');
    }
  }

  savePost(): void {
    if (this.isEditMode) {
      this.postsService.updatePost(this.post.id, this.post).subscribe(() => {
        this.router.navigate(['/post', this.post.id]);  // Navigate back to the post detail page
      });
    } else {
      this.postsService.createPost(this.post).subscribe(() => {
        this.router.navigate(['/']);  // Navigate back to the home page
      });
    }
  }
}