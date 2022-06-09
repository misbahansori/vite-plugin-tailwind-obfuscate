import EyeIcon from "./icons/eye.svg?component";
import HomeIcon from "./icons/home.svg?component";
import BillIcon from "./icons/bill.svg?component";
import CardIcon from "./icons/card.svg?component";
import MailIcon from "./icons/mail.svg?component";
import BellIcon from "./icons/bell.svg?component";
import SendIcon from "./icons/send.svg?component";
import PlusIcon from "./icons/plus.svg?component";
import FundIcon from "./icons/fund.svg?component";
import InboxIcon from "./icons/inbox.svg?component";
import SearchIcon from "./icons/search.svg?component";
import InvoiceIcon from "./icons/invoice.svg?component";
import RevenueIcon from "./icons/revenue.svg?component";
import ExpenseIcon from "./icons/expense.svg?component";
import ReceiveIcon from "./icons/receive.svg?component";
import BuildingIcon from "./icons/building.svg?component";
import SettingsIcon from "./icons/settings.svg?component";
import CalendarIcon from "./icons/calendar.svg?component";
import DashboardIcon from "./icons/dashboard.svg?component";
import DoughnutChart from "./charts/doughnut.svg?component";
import StatisticChart from "./charts/statistic.svg?component";
import InvestmentIcon from "./icons/investment.svg?component";
import CreditCardIcon from "./icons/credit-card.svg?component";
import DotsCircleIcon from "./icons/dots-circle.svg?component";
import ChevronDownIcon from "./icons/chevron-down.svg?component";
import { useState } from "react";

const menu = [
  { name: "Home", icon: HomeIcon },
  { name: "USA Payors", icon: BillIcon },
  { name: "Invoices", icon: InvoiceIcon },
  { name: "My Banks", icon: BuildingIcon },
  { name: "Withdraw", icon: CardIcon },
  { name: "Settings", icon: SettingsIcon },
];

const recentTransactions = [
  {
    icon: SendIcon,
    color: "bg-indigo-700",
    type: "Send transaction",
    date: "Dec 24, 2021",
    amount: "$ 123.00",
    balance: "$ 334.00",
  },
  {
    icon: ReceiveIcon,
    color: "bg-green-400",
    type: "Receive fund",
    date: "Jul 20. 2021",
    amount: "$ 322.00",
    balance: "$ 658.00",
  },
];

const invoices = [
  {
    no: "#BCS101",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-2.jpeg",
    name: "Alexandar Parkinson",
    amount: "$ 13435.50",
    status: "Successful",
  },
  {
    no: "#BSD133",
    date: "Jun 21, 2020",
    avatar: "/img/avatar-3.jpeg",
    name: "Natasha Analington",
    amount: "$ 1654.50",
    status: "Pending",
  },
];

function App() {
  const [showCvc, setShowCvc] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-gray-700 font-sans">
      <aside className="flex w-64 flex-col px-4 pt-10 pb-6">
        <a
          href="#"
          className="flex items-center gap-x-4 px-8 text-2xl font-medium text-white"
        >
          <DashboardIcon className="h-6 w-6 stroke-current" />
          <span>Transfer</span>
        </a>
        <ul className="flex flex-1 flex-col gap-y-10 px-8 pt-14">
          {menu.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <a
                  href="#"
                  className="flex items-center gap-x-4 text-gray-400 hover:font-medium hover:text-white"
                >
                  <Icon className="h-6 w-6 stroke-current" />
                  <span>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="rounded-10 sticky bottom-4 bg-gray-900 bg-[url(/img/line-pattern.svg?component)] bg-top p-6">
          <div className="text-white">
            Refer a friend and get <span className="font-bold">$5</span>
          </div>
          <div className="mt-3 text-sm text-gray-400">
            The reward of transfer.
          </div>
          <button className="mt-4 w-full rounded-lg bg-gray-700 py-2 text-sm font-normal text-white">
            Invite
          </button>
        </div>
      </aside>
      <main className="flex min-h-screen flex-1 flex-col rounded-l-[48px] bg-gray-800 p-8">
        <nav className="flex items-center gap-x-6">
          <div className="flex w-3/5 items-center justify-between">
            <h1 className="text-[30px] font-bold text-white">Overview</h1>
            <div className="flex items-center gap-x-2">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 flex items-center px-3">
                  <SearchIcon className="h-6 w-6 stroke-current text-gray-400" />
                </span>
                <input
                  type="text"
                  placeholder="Search"
                  className="rounded-10 bg-gray-900 py-3 pr-4 pl-10 text-sm font-light text-gray-400"
                />
              </div>
              <button className="rounded-10 bg-gray-900 py-3 px-4 text-sm font-light text-gray-400">
                Add Account
              </button>
            </div>
          </div>
          <div className="flex w-2/5 items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                <MailIcon className="h-7 w-7 stroke-current text-gray-400" />
              </button>
              <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                <BellIcon className="h-7 w-7 stroke-current text-gray-400" />
                <div className="absolute top-3 right-3 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
                </div>
              </button>
              <button className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-900">
                <InboxIcon className="h-7 w-7 stroke-current text-gray-400" />
              </button>
            </div>

            <button className="flex h-11 items-center justify-center rounded-full bg-gray-900 px-2">
              <img
                src="/img/avatar-1.jpeg"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="pl-2 text-sm font-light text-white">
                Alexander
              </span>
              <ChevronDownIcon className="h-6 w-6 stroke-current text-gray-400" />
            </button>
          </div>
        </nav>

        <div className="flex gap-x-6 py-8">
          <div className="flex w-3/5 flex-col gap-y-8">
            <div className="rounded-10 flex items-center justify-between bg-gray-900 bg-[url(/img/line-pattern.svg?component)] p-7">
              <div className="flex items-center gap-x-4">
                <div className="rounded-full bg-gray-700 p-3">
                  <CreditCardIcon className="h-5 w-5 fill-current text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">CARD NUMBER</div>
                  <div className="pt-1 text-white">5540 2280 8647 5687</div>
                </div>
              </div>
              <div className="h-full w-px bg-gray-700" />
              <div className="">
                <div className="text-sm text-gray-400">EXPIRE DATE</div>
                <div className="pt-1 text-white">08/28</div>
              </div>
              <div className="h-full w-px bg-gray-700" />
              <div className="">
                <div className="text-sm text-gray-400">CVC</div>
                <div className="flex items-center gap-x-2">
                  {showCvc ? (
                    <div className="pt-1 text-white tabular-nums">433</div>
                  ) : (
                    <div className="pt-1 text-white tabular-nums">***</div>
                  )}
                  <button onClick={() => setShowCvc(!showCvc)}>
                    <EyeIcon className="h-6 w-6 stroke-current text-white" />
                  </button>
                </div>
              </div>
              <div className="h-full w-px bg-gray-700" />
              <div className="">
                <div className="text-sm text-gray-400">STATUS</div>
                <div className="pt-1 text-white">Active</div>
              </div>
            </div>

            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">
                  Statistics of costs
                </h2>
                <button className="rounded-10 inline-flex items-center gap-x-1 bg-gray-700 py-2 px-4 text-sm font-light text-gray-400">
                  <span>Jan - Aug</span>
                  <ChevronDownIcon className="h-6 w-6 stroke-current" />
                </button>
              </div>
              <div className="flex pt-8">
                <StatisticChart className="w-full" />
                <div className="flex flex-col gap-4">
                  <div className="rounded-10 flex items-center gap-x-3 bg-indigo-400 p-4">
                    <div className="rounded-full bg-gray-900 p-2 text-indigo-700">
                      <RevenueIcon className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm text-indigo-700">Revenue</div>
                      <div className="font-normal">$10.567</div>
                    </div>
                  </div>
                  <div className="rounded-10 flex items-center gap-x-3 bg-green-400 p-4">
                    <div className="rounded-full bg-gray-900 p-2 text-green-700">
                      <ExpenseIcon className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm text-green-700">Expenses</div>
                      <div className="font-normal">$8,567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">
                  Recent transactions
                </h2>
                <button className="rounded-10 inline-flex items-center gap-x-1 bg-gray-700 py-2.5 px-4 text-sm font-light text-gray-400">
                  View All
                </button>
              </div>
              <table>
                <tbody>
                  {recentTransactions.map((transaction) => {
                    const TransactionIcon = transaction.icon;
                    return (
                      <tr
                        v-for="transaction in recentTransactions"
                        className="border-b border-gray-700 last:border-none"
                      >
                        <td className="py-4">
                          <div className="flex items-center gap-x-4">
                            <div
                              className={`flex items-center justify-center rounded-full p-2 ${transaction.color}`}
                            >
                              <TransactionIcon className="h-5 w-5 fill-current text-gray-900" />
                            </div>
                            <span className="text-sm text-white">
                              {transaction.type}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center gap-x-2">
                            <div className="flex items-center justify-center rounded-full bg-gray-700 p-2">
                              <CalendarIcon className="h-6 w-6 stroke-current text-gray-400" />
                            </div>
                            <span className="text-sm text-gray-400">
                              {transaction.date}
                            </span>
                          </div>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-white">
                            {transaction.amount}
                          </span>
                        </td>
                        <td className="py-4">
                          <span className="text-sm text-white">
                            {transaction.balance}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">Invoices</h2>
                <button className="rounded-10 inline-flex items-center gap-x-1 bg-gray-700 py-2.5 px-4 text-sm font-light text-gray-400">
                  <PlusIcon className="h-6 w-6 stroke-current" />
                  <span>New Invoices</span>
                </button>
              </div>
              <table className="mt-4">
                <thead>
                  <tr>
                    <td className="py-1 text-sm text-gray-400">No</td>
                    <td className="py-1 text-sm text-gray-400">Date</td>
                    <td className="py-1 text-sm text-gray-400">Client</td>
                    <td className="py-1 text-sm text-gray-400">Amount</td>
                    <td className="py-1 text-sm text-gray-400">Status</td>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice, index) => (
                    <tr className="border-b border-gray-700 last:border-none">
                      <td className="py-4">
                        <span className="text-sm font-medium text-white">
                          {invoice.no}
                        </span>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-gray-400">
                          {invoice.date}
                        </span>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center gap-x-2">
                          <img
                            src={invoice.avatar}
                            alt=""
                            className="h-6 w-6 rounded-full object-cover"
                          />
                          <span className="text-sm text-white">
                            {invoice.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4">
                        <span className="text-sm text-white">
                          {invoice.amount}
                        </span>
                      </td>
                      <td className="py-4">
                        <div
                          className={`rounded-10 flex items-center justify-center gap-x-2 border  py-2 px-1 ${
                            invoice.status === "Successful"
                              ? "bg-green-700/20 border-green-400/10"
                              : "bg-indigo-700/20 border-indigo-400/10"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              invoice.status === "Successful"
                                ? "bg-green-400"
                                : "bg-indigo-400"
                            }`}
                          />
                          <span
                            className={`text-xs ${
                              invoice.status === "Successful"
                                ? "text-green-400"
                                : "text-indigo-400"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex w-2/5 flex-col gap-y-8">
            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">
                  Scheduled transfer
                </h2>
                <button className="rounded-10 inline-flex items-center gap-x-1 bg-gray-700 py-2.5 px-4 text-sm font-light text-gray-400">
                  <PlusIcon className="h-6 w-6 stroke-current" />
                  <span>Add new</span>
                </button>
              </div>
              <div className="grid grid-cols-3 gap-x-4 pt-4">
                <div className="rounded-10 bg-gray-700 p-2">
                  <img src="/img/Youtube-logo.png" alt="" className="w-16" />
                  <div className="pt-6 text-sm font-normal text-white">
                    $39.9/m
                  </div>
                </div>
                <div className="rounded-10 bg-gray-700 p-2">
                  <img src="/img/Netflix-logo.png" alt="" className="w-16" />
                  <div className="pt-6 text-sm font-normal text-white">
                    $45.2/m
                  </div>
                </div>
                <div className="rounded-10 bg-gray-700 p-2">
                  <img src="/img/Spotify-logo.png" alt="" className="w-16" />
                  <div className="pt-6 text-sm font-normal text-white">
                    $59.5/m
                  </div>
                </div>
              </div>
              <button className="rounded-10 mt-4 w-full bg-gray-700 py-3 text-white">
                Get Started
              </button>
            </div>
            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">
                  My savings
                </h2>
                <button className="rounded-10 inline-flex items-center gap-x-1 bg-gray-700 py-2.5 px-4 text-sm font-light text-gray-400">
                  <span>Weekly</span>
                  <ChevronDownIcon className="h-6 w-6 stroke-current" />
                </button>
              </div>
              <div className="flex flex-col gap-y-4 pt-4">
                <div className="rounded-10 flex w-full items-center gap-x-4 bg-gray-700 p-4">
                  <div className="flex items-center justify-center rounded-full bg-indigo-400 p-2">
                    <InvestmentIcon className="h-5 w-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Investment</span>
                      <span className="font-medium text-white">＄2.350.02</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      2 months income 80%
                    </span>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-900">
                      <div
                        className="h-2 rounded-full bg-indigo-400"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="rounded-10 flex w-full items-center gap-x-4 bg-gray-700 p-4">
                  <div className="flex items-center justify-center rounded-full bg-green-400 p-2">
                    <FundIcon className="h-5 w-5 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white">Mutual fund</span>
                      <span className="font-medium text-white">$1,450.02</span>
                    </div>
                    <span className="text-sm text-gray-400">
                      3 months income 50%
                    </span>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-900">
                      <div
                        className="h-2 rounded-full bg-green-400"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-10 flex flex-col justify-between bg-gray-900 p-7">
              <div className="flex items-center justify-between">
                <h2 className="text-[20px] font-medium text-white">
                  Revenue statistics
                </h2>
                <button className="p-2 text-gray-400">
                  <DotsCircleIcon className="h-6 w-6 fill-current" />
                </button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="rounded-10 bg-gray-700 p-4">
                  <DoughnutChart />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-10 flex items-center gap-x-3 bg-indigo-400 p-4">
                    <div className="rounded-full bg-gray-900 p-2 text-indigo-700">
                      <RevenueIcon className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm text-indigo-700">
                        Mutual Funds
                      </div>
                      <div className="font-normal">$10.567</div>
                    </div>
                  </div>
                  <div className="rounded-10 flex items-center gap-x-3 bg-green-400 p-4">
                    <div className="rounded-full bg-gray-900 p-2 text-green-700">
                      <ExpenseIcon className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                      <div className="text-sm text-green-700">Investment</div>
                      <div className="font-normal">$8,567</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
