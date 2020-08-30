using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SearchAndFilter.Models;

namespace SearchAndFilter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EventsController : ControllerBase
    {
        private readonly CategoryEventContext _context;

        public EventsController(CategoryEventContext context)
        {
            _context = context;
        }

        
        [Route("search")]
        [HttpPost]
        public async Task<ActionResult<List<Event>>> Search(EventsRequest eventsRequest)
        {
            IQueryable<Event> @event = _context.Events;

            if (eventsRequest.CategoryId != 0)
            {
                @event = @event.Where(e => e.CategoryId == eventsRequest.CategoryId);
            }

            if (!String.IsNullOrEmpty(eventsRequest.Keyword))
            {
                @event = @event.Where(e => e.EventKeyword.Contains(eventsRequest.Keyword) || e.EventName.Contains(eventsRequest.Keyword));
            }
            
            return await @event.Take(eventsRequest.PageSize * eventsRequest.PageIndex)
                .ToListAsync();
        }
    }
}
