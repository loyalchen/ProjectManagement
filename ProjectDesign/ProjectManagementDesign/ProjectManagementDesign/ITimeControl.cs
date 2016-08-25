using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementDesign
{
    public interface ITimeControl
    {
        /// <summary>
        /// Actual Time of End
        /// </summary>
        DateTime ATE { get; set; }
        /// <summary>
        /// Actual Time of Start
        /// </summary>
        DateTime ATS { get; set; }
        /// <summary>
        /// Estimated Time of End
        /// </summary>
        DateTime ETE { get; set; }
        /// <summary>
        /// Estimated Time of Start
        /// </summary>
        DateTime ETS { get; set; }
        /// <summary>
        /// actually coste minutes
        /// </summary>
        int ACM { get; set; }
        /// <summary>
        /// minutes compare with Estimated time
        /// </summary>
        int CEM { get; set; }
        /// <summary>
        /// the day count cost
        /// </summary>
        int SpanDays { get; set; }
    }
}
