import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let previousBodyClass: string;

  beforeEach(() => {
    previousBodyClass = document.body.className;
    TestBed.configureTestingModule({});
    spyOn(Storage.prototype, 'setItem');
  });

  afterEach(() => {
    document.body.className = previousBodyClass;
  });

  it('restores a saved dark theme', () => {
    spyOn(Storage.prototype, 'getItem').and.returnValue('dark');
    const service = TestBed.inject(ThemeService);
    expect(service.getTheme()).toBe('dark');
    expect(document.body.classList.contains('dark')).toBeTrue();
  });

  it('falls back to light for an invalid saved value', () => {
    spyOn(Storage.prototype, 'getItem').and.returnValue('unexpected');
    expect(TestBed.inject(ThemeService).getTheme()).toBe('light');
  });

  it('keeps toggling when browser storage is blocked', () => {
    spyOn(Storage.prototype, 'getItem').and.throwError('Storage blocked');
    (Storage.prototype.setItem as jasmine.Spy).and.throwError('Storage blocked');
    const service = TestBed.inject(ThemeService);
    service.toggleTheme();
    expect(service.getTheme()).toBe('dark');
    service.toggleTheme();
    expect(service.getTheme()).toBe('light');
    expect(document.body.classList.contains('dark')).toBeFalse();
  });
});
