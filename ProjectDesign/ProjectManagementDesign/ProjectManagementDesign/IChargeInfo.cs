using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectManagementDesign
{
    public interface IChargeInfo
    {
        int CreatorId { get; set; }
        int OwnerId { get; set; }
        int FormerOwnerId { get; set; }
        DateTime ChargeFrom { get; set; }
        DateTime? ChargeTo { get; set; }
        DateTime FormerChargeFrom { get; set; }
        DateTime FormerChargeTo { get; set; }
    }
}
