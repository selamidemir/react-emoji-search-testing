import '@testing-library/jest-dom/extend-expect';
import { screen, render} from '@testing-library/react';
import React from 'react';

import Header from '../Header';

describe('Header bölümü unit testleri', () => {
    
    test('Header bölümünde başlık ve resimler bulunmalı', () =>{
        render(<Header />);
        const title = screen.getByText('Emoji Search');
        let images = screen.getAllByRole('img');

        expect(title).toBeInTheDocument();
        expect(images[0]).toHaveAttribute('src', '//cdn.jsdelivr.net/emojione/assets/png/1f638.png');
        expect(images[1]).toHaveAttribute('src', '//cdn.jsdelivr.net/emojione/assets/png/1f63a.png');      
    });
})