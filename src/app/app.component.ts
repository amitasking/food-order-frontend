import { Component, OnInit } from '@angular/core';
import { FoodMenuService } from './services/food-menu.service';
import { FoodItem } from './models/FoodItem.model';
import { HttpClient } from '@angular/common/http'
import { UtilService } from './services/util.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { take } from 'rxjs';
import { SwPush } from '@angular/service-worker';
import { NotificationService } from './service/notification.service';
declare var M: any;
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  //vapidKey: string = "BJNhvkYyr_VbQLcTijnWZfQx7Vugk-0fUfHTZfBL00WzhlSuvs-4ow729tQeQp08MdX5u-FCSk7rxxPu7g2oaeI"
  vapidKey : string = 'BFtdOyW-hjO8nFiCEBHmu8tS4vYkSQm0MfNy9KaeUTcWSmCyZqdI_M3l01YRlaYNof9gK9S16kPDsLr_Tr3YI9g'
  arr: any[] = [
    {
      "id": 1,
      "description": "Dal fry + Chaap masala + Achaari Gobhi aloo + Jeera rice + 4 phulka + Ras bhari Salad",
      "name": "Dal Fry Thali",
      "menuType": "lunch",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/1.jpg",
      "servedOn": 1,
      "createdAt": "2023-06-02T10:30:07.000Z",
      "updatedAt": "2023-06-02T10:30:07.000Z"
    },
    {
      "id": 2,
      "description": "Fattoush salad with Pita",
      "name": "Fattoush salad with Pita",
      "menuType": "dinner",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/2.jpg",
      "servedOn": 1,
      "createdAt": "2023-06-02T10:30:13.000Z",
      "updatedAt": "2023-06-02T10:30:13.000Z"
    },
    {
      "id": 3,
      "description": "Dal khichdi+Cucumber raita+Papad choori+Gulab jamun+Salad",
      "name": "Dal khichdi",
      "menuType": "dinner",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/3.jpg",
      "servedOn": 2,
      "createdAt": "2023-06-02T10:30:18.000Z",
      "updatedAt": "2023-06-02T10:30:18.000Z"
    },
    {
      "id": 4,
      "description": "Greek Salad with Salsa",
      "name": "Greek Salad with Salsa",
      "menuType": "dinner",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/4.jpg",
      "servedOn": 2,
      "createdAt": "2023-06-02T10:30:24.000Z",
      "updatedAt": "2023-06-02T10:30:24.000Z"
    },
    {
      "id": 5,
      "description": "Dal pachranga + Gatte ki sabji + Dry dum aloo + Steam rice + 4 phulka + Choorma Ladoo + Salad",
      "name": "Dal pachranga with Gatte ki sabji",
      "menuType": "dinner",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/5.jpg",
      "servedOn": 3,
      "createdAt": "2023-06-02T10:30:30.000Z",
      "updatedAt": "2023-06-02T10:30:30.000Z"
    },
    {
      "id": 6,
      "description": "Veg Junglee Sandwich (Multi grain brown bread)",
      "name": "Veg Junglee Sandwich",
      "menuType": "lunch",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/6.jpg",
      "servedOn": 3,
      "createdAt": "2023-06-02T10:30:35.000Z",
      "updatedAt": "2023-06-02T10:30:35.000Z"
    },
    {
      "id": 7,
      "description": "Veg Falafel Combo",
      "name": "Veg Falafel Combo",
      "menuType": "lunch",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/8.jpg",
      "servedOn": 4,
      "createdAt": "2023-06-02T10:30:48.000Z",
      "updatedAt": "2023-06-02T10:30:48.000Z"
    },
    {
      "id": 8,
      "description": "Hakka noodles + Honey chilli potato + Dahi ke kabab + Schezwan chutney + Choko Cookies",
      "name": "Hakka noodles with chilli potato",
      "menuType": "z",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/9.jpg",
      "servedOn": 5,
      "createdAt": "2023-06-02T10:30:54.000Z",
      "updatedAt": "2023-06-02T10:30:54.000Z"
    },
    {
      "id": 9,
      "description": "Paneer Tikka Salad",
      "name": "Paneer Tikka Salad",
      "menuType": "lunch",
      "calories": 200,
      "protein": 100,
      "carbs": 200,
      "image": "../../assets/10.jpg",
      "servedOn": 5,
      "createdAt": "2023-06-02T10:30:59.000Z",
      "updatedAt": "2023-06-02T10:30:59.000Z"
    }
  ]
  foodType: String = ''
  constructor(private swPush: SwPush, private route: ActivatedRoute, private http: HttpClient, private auth: AuthService, private not: NotificationService) {
    this.auth.currentSession().then((res: any) => {
      //  alert("added fresh token")
      let accessToken = res.getAccessToken()
      localStorage.setItem("token", JSON.stringify(accessToken))
      console.log(accessToken);

    })

  }
  showLogo = true
  sideBarState = false;
  ngOnInit(): void {
    this.subscribe()

    this.swPush.messages.subscribe(message => {
      console.log(message);

    })

    // this.auth.currentSession()
    // this.route.params.subscribe((params) => {
    //  alert(0)
    // });
    const modalElement = document.getElementById('myModal');
    M.Modal.init(modalElement);
  }
  foodTypeSelected: boolean = false;
  foodItems: FoodItem[] = [];

  title = 'food-order';


  automate() {
    this.arr.forEach(item => {
      this.http.post('http://localhost:3000/fooditem', item).subscribe(res => {

      })
    })
  }

  subscribe() {

    this.swPush.requestSubscription({
      serverPublicKey: this.vapidKey
    })
      // .then(sub => this.not.addPushSubscriber(sub).subscribe())
      .then(res => {
        console.log(res)
        const key = res.getKey("p256dh");
        const auth = 2
        console.log("key " + key);
        console.log("auth " + auth);
        console.log(JSON.stringify(res));
        
       
       
        this.not.addPushSubscriber(JSON.parse(JSON.stringify(res))).subscribe(rex => {
          this.not.send().subscribe()
     

      });
      }
      )
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

}
