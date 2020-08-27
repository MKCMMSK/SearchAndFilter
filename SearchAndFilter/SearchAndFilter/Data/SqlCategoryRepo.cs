using SearchAndFilter.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAndFilter.Data
{
    public class SqlCategoryRepo : ICategoryRepo
    {
        private readonly CategoryEventContext _context;

        public SqlCategoryRepo(CategoryEventContext context)
        {
            _context = context;
        }
        public IEnumerable<Category> GetCategories()
        {
            return _context.Categories.ToList();
        }

        public Category GetCategoryById(int id)
        {
            return _context.Categories.FirstOrDefault(p => p.CategoryId == id);
        }
    }
}
