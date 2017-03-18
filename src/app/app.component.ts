import { Component } from '@angular/core';
import { FlickrService } from "./flickr.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FlickrService ]
})
export class AppComponent {

  constructor(private flickrService: FlickrService) { }

  /**
   * Handle submit on enter key down for search input
   *
   * @param event
   * @param value
   */
  onInputKeyDown(event, value) {
    if (event.keyCode == 13) {
      this.onSearch(value);
    }
  }

  /**
   * Complete Flickr search
   *
   * @param value - The search value
   */
  onSearch(value: string) {
    this.flickrService.searchPhotos(value).subscribe(
      () => document.querySelector('app-photo-list').scrollTop = 0
    );
  }
}
