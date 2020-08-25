using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAndFilter.Models
{
    public class CategoryEventContext: DbContext
    {
        public CategoryEventContext(DbContextOptions<CategoryEventContext>options):base(options)
        {
        }
            public DbSet<Category> Categories { get; set; }
            public DbSet<Event> Events { get; set; }

    }
}
