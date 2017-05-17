using System.Collections.Generic;

namespace TodoApi.Models
{
    public interface ITodoRepository
    {
        void Add(TodoItem item);
        IEnumerable<TodoItem> All{ get; }
        TodoItem Find(long key);
        void Remove(long key);
        void Update(TodoItem item);
    }
}