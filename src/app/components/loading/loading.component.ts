import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  `
})
export class LoadingComponent {}