using SearchAndFilter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAndFilter.Data
{
    public interface IEventRepo
    {
        IEnumerable<Event> GetAllEvents();
        Event GetEventsByCategory(int id);
        List<Event> Search(EventsRequest eventRequest);
    }
}
