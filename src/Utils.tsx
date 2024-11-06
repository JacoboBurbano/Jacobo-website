export function handleClick(isVisible: boolean, setVisible: React.Dispatch<React.SetStateAction<boolean>>){
    return () => {
        switch (isVisible) {
            case false:
                setVisible(true);
                break;
            default:
                setVisible(false);
                break;
        }
    }
};