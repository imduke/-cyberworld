using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace ToDoApi.Controllers
{
    public class MoviesController : Controller
    {
        private readonly MvcMovieContext _context;

        public MoviesController(MvcMovieContext context)
        {
            _context = context;    
        }

        // GET: Movies
        public async Task<IActionResult> Index()
        {
            return View(await _context.MovieItems.ToListAsync());
        }

        // GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mvcMovie = await _context.MovieItems
                .SingleOrDefaultAsync(m => m.ID == id);
            if (mvcMovie == null)
            {
                return NotFound();
            }

            return View(mvcMovie);
        }

        // GET: Movies/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Movies/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("ID,Title,ReleaseDate,Genre,Price")] MvcMovie mvcMovie)
        {
            if (ModelState.IsValid)
            {
                _context.Add(mvcMovie);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(mvcMovie);
        }

        // GET: Movies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mvcMovie = await _context.MovieItems.SingleOrDefaultAsync(m => m.ID == id);
            if (mvcMovie == null)
            {
                return NotFound();
            }
            return View(mvcMovie);
        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("ID,Title,ReleaseDate,Genre,Price")] MvcMovie mvcMovie)
        {
            if (id != mvcMovie.ID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(mvcMovie);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MvcMovieExists(mvcMovie.ID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Index");
            }
            return View(mvcMovie);
        }

        // GET: Movies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var mvcMovie = await _context.MovieItems
                .SingleOrDefaultAsync(m => m.ID == id);
            if (mvcMovie == null)
            {
                return NotFound();
            }

            return View(mvcMovie);
        }

        // POST: Movies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var mvcMovie = await _context.MovieItems.SingleOrDefaultAsync(m => m.ID == id);
            _context.MovieItems.Remove(mvcMovie);
            await _context.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        private bool MvcMovieExists(int id)
        {
            return _context.MovieItems.Any(e => e.ID == id);
        }
    }
}
