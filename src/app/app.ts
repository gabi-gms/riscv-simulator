import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InstructionParserService } from './core/parser/instruction-parser.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('riscv-simulator');
  private parser = inject(InstructionParserService);

  ngOnInit() {
    this.parser.parse('SW x1, 0(x2)');
  }
}
