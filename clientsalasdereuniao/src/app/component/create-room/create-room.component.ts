import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/model/Room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  room!: Room;
  submitted = false;

  constructor(
    private roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newRoom(): void {
    this.submitted = false;
    this.room = null;
  }

  save() {
    this.roomService.createRoom(this.room).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.room;
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }


}
