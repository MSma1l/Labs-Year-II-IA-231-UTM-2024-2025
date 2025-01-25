from aiogram.types import (ReplyKeyboardMarkup, KeyboardButton,
                           InlineKeyboardMarkup,InlineKeyboardButton)
from aiogram.utils.keyboard import InlineKeyboardBuilder

from app.database.requests import get_categories,get_film_category

nan = ReplyKeyboardMarkup(
    keyboard=[
        [KeyboardButton(text='Filme❤️🎬🍿Seriale')]

    ],
    resize_keyboard=True,  
    input_field_placeholder='Alegeti! Ce doriți să priviți'  # Corectarea sintaxei
)


async def categories():
    all_categories = await get_categories()
    keyboard = InlineKeyboardBuilder()
    for category in all_categories:
        keyboard.add(InlineKeyboardButton(text=category.name, callback_data=f"category_{category.id}"))
    keyboard.add(InlineKeyboardButton(text='Main',callback_data='to_main'))
    return keyboard.adjust(3).as_markup()

async def film(category_id):
    all_films = await get_film_category(category_id)
    keyboard = InlineKeyboardBuilder()
    for film in all_films:
        keyboard.add(InlineKeyboardButton(text=film.name, callback_data=f"film_{film.id}"))
    keyboard.add(InlineKeyboardButton(text='Main',callback_data='to_main'))
    return keyboard.adjust(3).as_markup()


