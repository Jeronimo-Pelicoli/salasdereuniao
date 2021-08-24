import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/model/Room';
import { RoomService } from 'src/app/service/room.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  
  id: number;
  room: Room;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) { }

  ngOnInit(): void {

    this.room;

    this.id = this.route.snapshot.params['id'];

    this.roomService.getRoom(this.id).subscribe(
      data => {
        console.log(data);
        this.room = data;
      },
      error => console.log(error)
    )
  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room).subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.room;
    this.gotoList();
  }

  onSubmit() {
    this.updateRoom();
  }

  gotoList() {
    this.router.navigate(['/rooms']);
  }

}
