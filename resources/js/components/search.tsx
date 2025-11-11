import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
} from '@/components/ui/input-group';
import { SearchIcon } from 'lucide-react';

export function SearchTickets() {
    return (
        <InputGroup>
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
                <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
                <InputGroupButton className='border-2'>Buscar</InputGroupButton>
            </InputGroupAddon>
        </InputGroup>
    );
}
