using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using TodoApi.Models;
using TodoApi.Common;

namespace TodoApi.Controllers
{
[Route("api/[controller]")]
public class TodoController : Controller
{
    private readonly ITodoRepository _todoRepository;
    public TodoController(ITodoRepository todoRepository)
    {
        _todoRepository = todoRepository;
    }

    [HttpGet]
    public IEnumerable<TodoItem> GetAll()
    {
        return _todoRepository.All;
    }

    [HttpGet("{id}", Name = "GetTodo")]
    public IActionResult GetById(long id)
    {
        var item = _todoRepository.Find(id);
        if (item == null)
        {
            return BadRequest();
        }
        return new ObjectResult(item);
    }

    [HttpPost]
    public IActionResult Create([FromBody] TodoItem item)
    {
        if (item == null)
        {
            return BadRequest();
        }
        _todoRepository.Add(item);
        return CreatedAtRoute("GetTodo", new { id = item.Key }, item);
    }

    [HttpPut("{id}")]
    public IActionResult Update(long id, [FromBody] TodoItem item)
    {
        if (item == null || item.Key != id)
        {
            return BadRequest();
        }

        var todo = _todoRepository.Find(id);
        if (todo == null)
        {
            return NotFound();
        }
        todo.IsComplete = item.IsComplete;
        todo.Name = item.Name;
        _todoRepository.Update(todo);
        return new NoContentResult();
    }

    [HttpDelete("{id}")]
    public IActionResult Delete(long id)
    {
        try
        {
            var item = _todoRepository.Find(id);
            if (item == null)
            {
                return NotFound(ErrorCode.RecordNotFound.ToString());
            }
            _todoRepository.Remove(id);
        }
        catch (Exception)
        {
            return BadRequest(ErrorCode.CouldNotDeleteItem.ToString());
        }
    return NoContent();
    }
} //class

} //namespace
