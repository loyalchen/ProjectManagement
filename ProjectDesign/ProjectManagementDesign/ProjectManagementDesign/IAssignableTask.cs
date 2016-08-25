using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementDesign
{
    public interface IAssignable : ITimeControl, IChargeInfo, ILogInfo {
        string Title { get; set; }
        string Tag { get; set; }
    }
}
