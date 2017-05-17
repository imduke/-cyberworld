using System;
using System.Collections.Generic;
using System.Linq;

namespace TodoApi.Models
{
    public class TodoRepository : ITodoRepository
    {
        public TodoContext _context;
        public TodoRepository(TodoContext context)
        {
            _context = context;

            if( _context.TodoItems.Count() == 0)
                Add(new TodoItem { Name = "Item1" });
        }
        public void Add(TodoItem item)
        {
            _context.TodoItems.Add(item);
            _context.SaveChanges();
        }

        public TodoItem Find(long key)
        {
            var item = _context.TodoItems.FirstOrDefault(k=>k.Key == key);
            return item;
        }

        public IEnumerable<TodoItem> All
        {
            get {
                    return _context.TodoItems.ToList();
                }
        }

        public void Remove(long key)
        {
            var item = _context.TodoItems.First(k=>k.Key==key);
            _context.TodoItems.Remove(item);
            _context.SaveChanges();
        }

        public void Update(TodoItem item)
        {
            _context.TodoItems.Update(item);
            _context.SaveChanges();
        }
    }
}