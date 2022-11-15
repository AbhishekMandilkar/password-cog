export const getTitleName = (routeName: string) => {
    switch (routeName) {
        case 'Home':
        return 'Home';
        case 'Profile':
        return 'Profile';
        case 'Add_Password':
        return 'Add Password';
        default:
        return '';
    }
}