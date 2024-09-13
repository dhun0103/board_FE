import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})

export class PostListComponent implements OnInit {
  
  posts: Post[] = [];

  pages = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(): void {
    this.postsService.getPosts().subscribe((data: any[]) => {
      this.posts = data
        .map(post => ({
          ...post,
          createdAt: new Date(post.createdAt),
          updatedAt: new Date(post.updatedAt),
        } as Post))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // Sort by createdAt
    });
  }


  goToPage(page: number): void {
    // Implement pagination logic here
  }

  navigateToCreate(): void {
    this.router.navigate(['/create']);
  }

  navigateToPost(id: string): void {
    this.router.navigate(['/post', id]);  // Programmatically navigate to the post detail page
  }
}