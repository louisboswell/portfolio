import { Moon, Sun } from 'lucide-react';
import {useTheme} from 'next-themes';
import { Button } from '../button';

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    function toggleTheme () {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }

    return (
        <>
            <Button onClick={toggleTheme} variant="link" className='p-0 text-xs text-gray-400 cursor-pointer'>
                {theme === 'dark' ? <Sun/> : <Moon/>}
            </Button>
        </>
    );
}