import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { UserComponent} from './components/user.component';
import { AboutComponent} from './components/about.component';
import { ExampleComponent } from './components/example.component';
import { ShowItemsComponent } from './components/showitems.component';
import { TwitterComponent } from './components/twitter/twitter.component';
import { GitHubProfileComponent } from './components/github/github-profile.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

const appRoutes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'example',
        component: ExampleComponent
    },
    {
        path: 'showitems',
        component: ShowItemsComponent
    },
    {
        path: 'twitter',
        component: TwitterComponent    

    },
    {
        path: 'github',
        component: GitHubProfileComponent    

    },
    {
        path: 'formExample',
        component: ContactFormComponent    

    },
    {
        path: 'subformExample',
        component: SubscriptionFormComponent    

    }



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);