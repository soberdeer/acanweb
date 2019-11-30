export function mapGroupName(groupName) {
  return groupName === 'Консервы' ? 'canned' : 'cured';
}

export function mapGroupNameFromKey(groupName) {
  return groupName === 'canned' ? 'Консервы' : 'Пресервы';
}
