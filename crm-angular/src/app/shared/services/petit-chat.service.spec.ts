import { TestBed } from '@angular/core/testing';

import { PetitChatService } from './petit-chat.service';

describe('PetitChatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetitChatService = TestBed.get(PetitChatService);
    expect(service).toBeTruthy();
  });
});
