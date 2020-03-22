import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworksComponent } from './artworks/artworks.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: {
            name: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            name: 'about'
        }
    },
    {
        path: 'artist',
        component: ArtistComponent,
        data: {
            name: 'artist'
        }
    },
    {
        path: 'art-works',
        component: ArtworksComponent,
        data: {
            name: 'artworks'
        }
    },
];

export const routerModule = RouterModule.forRoot(routes);
