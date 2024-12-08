export function getInfo(entity) {

    switch (entity) {
      case 'employee':
        return [
          { id: 1, name: 'Alice', position: 'Manager' },
          { id: 2, name: 'Bob', position: 'Developer' },
        ];
      case 'driver':
        return [
          { id: 1, name: 'Charles', route: 'Route 1' },
          { id: 2, name: 'Diana', route: 'Route 2' },
        ];
      case 'product':
        return [
          { id: 1, name: 'Widget A', price: '$10' },
          { id: 2, name: 'Widget B', price: '$15' },
        ];
      case 'service':
        return [
          { id: 1, name: 'Consulting', duration: '1 hour' },
          { id: 2, name: 'Support', duration: '30 minutes' },
        ];
      default:
        return [];
    }
  }
  