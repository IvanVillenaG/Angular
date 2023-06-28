import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Villager } from '../villagers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-villagers',
  templateUrl: './villagers.component.html',
  styleUrls: ['./villagers.component.scss']
})
export class VillagersComponent implements OnInit {
  villagers: Villager[] = [];
  currentPage: number = 1;
  pageSize: number = 12;
  totalVillagers: number = 0;
  totalPages: number = 0;
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isLoggedIn = this.checkLoginStatus();
    this.getVillagersData();
  }

  getVillagersData() {
    const apiData = 'https://acnhapi.com/v1/villagers/';

    this.http.get<any>(apiData).pipe(
      map((response: any) => {
        const villagersData: any[] = Object.values(response);

        return villagersData.map((villagerData: any) => ({
          name: villagerData.name['name-USen'],
          image: villagerData.image_uri,
          birthday: villagerData.birthday,
          catchPhrase: villagerData['catch-phrase']
        }));
      })
    ).subscribe((villagers: Villager[]) => {
      this.villagers = villagers;
      this.totalVillagers = this.villagers.length;
      this.totalPages = Math.ceil(this.totalVillagers / this.pageSize);
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  checkLoginStatus(): boolean {
    const userData = localStorage.getItem('userData');
    return !!userData;
  }
}
