from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy.ext.asyncio import AsyncAttrs, async_sessionmaker, create_async_engine
import asyncio
from sqlalchemy.orm import relationship

from sqlalchemy import Column, String, Integer, ForeignKey,BigInteger


engine = create_async_engine(url='sqlite+aiosqlite:///Bazadedate.sqlite3')
async_session = async_sessionmaker(engine)


class Base(AsyncAttrs, DeclarativeBase):
    pass


class User(Base):
    __tablename__ = 'users'

    id: Mapped[int] = mapped_column(primary_key=True)
    telegram_id: Mapped[int] = mapped_column(BigInteger)

class Category(Base):
    __tablename__ = 'categories'  

    id = Column(Integer, primary_key=True)  
    name = Column(String(32))               

    
    films = relationship("Film", back_populates="category_obj")

    def __repr__(self):
        return f"<Category(id={self.id}, name='{self.name}')>"

class Film(Base):
    __tablename__ = 'films'
  
    id = Column(Integer, primary_key=True)          
    name = Column(String(32))                       
    category = Column(Integer, ForeignKey('categories.id')) 
    tip = Column(String(32)) 
    age = Column(String(16))
    age_rec = Column(String(4))
    actor = Column(String(256))
    description = Column(String(1048))      
    link = Column(String(1000)) 
    linkyotube = Column(String(1000))
   
    category_obj = relationship("Category", back_populates="films")
    def __repr__(self):
        return f"<Film(id={self.id}, name='{self.name}',actori='{self.actor}',anu='{self.age}',tip='{self.tip}',ani recomandati='{self.age_rec}', description='{self.description}',link='{self.link}',link_yotube='{self.linkyotube}')>"

    
async def async_main():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        
    print("Tabelele au fost create cu succes!")


if __name__ == "__main__":
    asyncio.run(async_main())