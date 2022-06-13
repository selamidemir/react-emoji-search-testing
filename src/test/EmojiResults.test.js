import '@testing-library/jest-dom/extend-expect';
import { screen, render} from '@testing-library/react';

import React from 'react';

import emojiList from "../emojiList.json";
import EmojiResults from "../EmojiResults";
import filterEmoji from '../filterEmoji';


describe('EmojiResults test işlemleri', () => {
    test('Emoji listesi yüklenmiş olmalı', () => {
        render(<EmojiResults emojiData={emojiList.slice(0,20)} />);
        emojiList.slice(0,20).forEach((emoji) => {
            expect(screen.getByText(String(emoji.title))).toBeInTheDocument();
        });
    });

    test('Emoji arandığında gelen sonuçlar ekranda gösterilmeli', () => {
        const testText1 = 'smile';
        const testText2 = 'heart';
        const maxResult = 20;
        

        // Test one with smile
        const filteredEmojiList1 = filterEmoji(testText1, maxResult);
        render(<EmojiResults emojiData={filteredEmojiList1} />);
        filteredEmojiList1.forEach((emoji) => {
            expect(screen.getAllByText(emoji.title)[0]).toBeInTheDocument();
        });

        // Test two with heart
        const filteredEmojiList2 = filterEmoji(testText2, maxResult);
        render(<EmojiResults emojiData={filteredEmojiList2} />);
        filteredEmojiList2.forEach((emoji) => {
            expect(screen.getAllByText(emoji.title)[0]).toBeInTheDocument();
        });
    });
})
