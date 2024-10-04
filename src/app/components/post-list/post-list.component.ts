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
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts = response.data // 데이터를 response.data로 변경
        .map((post: any) => ({
          ...post,
          createdAt: post.createdAt ? new Date(post.createdAt.split('.')[0]) : null, // createdAt이 있을 때만 처리
        } as Post))
        .sort((a: Post, b: Post) => b.createdAt?.getTime() - a.createdAt?.getTime()); // Sort by createdAt, createdAt이 없는 경우를 대비
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