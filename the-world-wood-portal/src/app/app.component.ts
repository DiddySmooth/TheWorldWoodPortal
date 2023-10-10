import { Component } from '@angular/core';
import PocketBase from "pocketbase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'the-world-wood-portal';

  ngOnInit(): void {
    const pb = new PocketBase("http://127.0.0.1:8090");
    
    pb.collection("dialogs").getList(1, 50).then((result: any) => {
      console.log(result)
    })
  }
}
