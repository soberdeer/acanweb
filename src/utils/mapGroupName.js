export function mapGroupName(groupName) {
  switch (groupName) {
    case 'Консервы':
      return 'canned';
    case 'Пресервы':
      return 'cured';
    default:
      return null;
  }
}

export function mapGroupNameFromKey(groupName) {
  switch (groupName) {
    case 'canned':
      return 'Консервы';
    case 'cured':
      return 'Пресервы';
    default:
      return null;
  }
}
