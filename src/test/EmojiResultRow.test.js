import '@testing-library/jest-dom/extend-expect';
import { screen, render} from '@testing-library/react';
import React from 'react';
import EmojiResultRow from '../EmojiResultRow';

describe('Emoji kopyalama işlemi', () => {
    test('"Click to copy emoji" yazısı ekranda olmalı', () => {
        // Önce clipboarda kopyalama sonrası ne var onun için bir event hazırlayılım
        render(<EmojiResultRow key='100' symbol='💯' title='100' />);
        expect(screen.getByText('Click to copy emoji')).toBeInTheDocument();
    });
})