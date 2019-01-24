import {Injectable} from '@angular/core';
import {Post} from './post.model';
import {Subject} from 'rxjs';

@Injectable({providedIn: 'root'})

export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  addPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
  getPosts() {
    return [...this.posts];
  }
  getPostsUpdateListner() {
    return this.postsUpdated.asObservable();
  }
}
