import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'todo', loadChildren: './features/todo/todo.module#TodoModule'
    },
    {
      path: 'calendar', loadChildren: './features/calendar/calendar.module#CalendarModule'
    },
    {
      path: 'encyclopedia', loadChildren: './features/encyclopedia/encyclopedia.module#EncyclopediaModule'
    },
    {
      path: 'news', loadChildren: './features/news/news.module#NewsModule'
    },
    {
      path: 'budget', loadChildren: './features/budget/budget.module#BudgetModule'
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}