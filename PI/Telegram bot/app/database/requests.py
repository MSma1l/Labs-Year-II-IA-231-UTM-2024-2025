from app.database.models import async_session
from app.database.models import User,Category,Film
from sqlalchemy import select,update,delete
from sqlalchemy.orm import joinedload

from sqlalchemy.future import select


async def set_user(telegram_id):
    async with async_session() as session:
        user = await session.scalar(select(User).where(User.telegram_id == telegram_id))

        if not user:
            session.add(User(telegram_id=telegram_id))
            await session.commit()


async def get_categories():
    async with async_session() as session:
        return await session.scalars(select(Category))
    
async def get_film_category(category_id):
    async with async_session() as ssession:
        return await ssession.scalars(select(Film).where(Film.category == category_id))

async def get_film(film_id):
    async with async_session() as session:
        film = await session.scalar(
            select(Film)
            .options(joinedload(Film.category_obj))  
            .where(Film.id == film_id)
        )
        return film


