function reportError(): never {
  throw new Error('some error');
}

reportError();

export {};
