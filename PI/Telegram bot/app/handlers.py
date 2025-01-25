from aiogram import F, Router
from aiogram.filters import CommandStart, Command
from aiogram.types import Message, CallbackQuery
import app.keyboards as kb
import app.database.requests as rq
from aiogram.utils.keyboard import InlineKeyboardMarkup,InlineKeyboardButton

router = Router()

@router.message(CommandStart())
async def cmd_start(message: Message):
    await rq.set_user(message.from_user.id)
    await message.answer('Salut.Te pot ajuta în căutarea unui film ?!')

@router.message(Command('help'))
async def help(message: Message):
    await message.answer('-------FilmaxBot------\nAcest bot ți permite sa deschuți si sa cauti film ori serial pentru vezionare\n--------------------------------------------\nComenzile Precepute de bot sunt: \n---/start----Activiază botul\n---/help---- Instrucțiuni pentru bot și posibilitățile botului\n---/info----informații adiționale\n\n-------Ce precepe botul------\n-----da-----\n-----nu-----\n-----hm-----\n-----recomanda un film-----\n\n\nMultumesc pentru Atenție!!!\n')

@router.message(Command('info'))
async def info(message: Message):
    await message.answer('Sunt creația unui proiect menit să vă ușureze căutarea filmelor, serialelor și desenelor animate, aducându-vă mai aproape de divertismentul care vă inspiră.\n Mulțumesc că mă alegeți pentru a vă ghida în această lume a poveștilor.🥺❤️')

@router.message()
async def handle_message(message: Message):
    text = message.text.strip().lower() 
    

    if text == "da":
        message_text = "Mă Bucur, îți doresc vizionare plăcută!!!🥺❤️"
        reply_markup = kb.nan
    elif text == "nu":
        message_text = "Îți recomand cu drag să te așezi confortabil❤️, să îți pregătești un bol de popcorn și să te bucuri de o experiență mai plăcută alături de mine🥺❤️"
        reply_markup = kb.nan
    elif text == "hm":
        message_text = "Te gândești ce film să vizionezi? "
        reply_markup = kb.nan
    elif text == "salut":
        message_text = "Salut, esti gata sa vezionezi un film sau un serial?❤️🎬🍿\niți pot recomanda ceva?!"
        reply_markup = kb.nan
    elif text == "recomanda un film":
        message_text = "Sigur iti voi recomda  niste filme din baza mea de date"
        reply_markup = None
    elif text == 'filme❤️🎬🍿seriale':
        await catalog(message) 
        return 
    else:
        message_text = "Nu am înțeles, te rog să spui mai clar."
        reply_markup = None

    await message.answer(message_text, reply_markup=reply_markup)


async def catalog(message: Message):
    await message.answer('Alegeți categoria dorită!', 
                         reply_markup=await kb.categories())
    

@router.callback_query(F.data.startswith('category_'))
async def handle_category(callback: CallbackQuery):
    try:
        category_id = callback.data.split('_')[1]
        print(f"Category ID: {category_id}") 

        await callback.answer("Alegeți un Film sau Serial din această categorie!")
        await callback.message.answer("Selectează un Film:", 
                                      reply_markup=await kb.film(category_id))
    except IndexError:
        await callback.answer("Eroare: ID-ul categoriei nu este valid.", show_alert=True)

@router.callback_query(F.data.startswith('film_'))
async def film(callback: CallbackQuery):
    try:
        film_id = callback.data.split('_')[1]
        film_data = await rq.get_film(film_id)  
        
        if film_data:
            await callback.answer("Film sau Serial selectat!")
            await callback.message.answer(
                f"Denumirea: {film_data.name}\n---------------------------------\nActorii: {film_data.actor}\n\nAnull Producerii: {film_data.age}\n---------------------------------\nTipul: {film_data.tip}\n---------------------------------\nDescrierea: {film_data.description}\n---------------------------------\nAnii Recomandți: {film_data.age_rec}\n---------------------------------\nCategoria:{film_data.category}\n---------------------------------\nLink spre film:{film_data.link}\n---------------------------------\nYouTube link: {film_data.linkyotube}")
            reply_markup=await kb.film(film_id)
        else:
            await callback.answer("Eroare: Film sau Serial nu a fost găsit în baza de date.", show_alert=True)
    except IndexError:
        await callback.answer("Eroare: ID-ul Filmui sau Serialui nu este valid.", show_alert=True)
    except Exception as e:
        await callback.answer(f"Eroare: {str(e)}", show_alert=True)




