import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const fiveMonth = () => {
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">May, 2023 | Shawwal</div>
          <div className="font-bold text-3xl">
            <Link
              href="/june"
              className="bg-green-600 p-2 text-white rounded-md "
            >
              Next Month
            </Link>
          </div>
        </div>
        <table class="bg-green-100 " border="1">
          <thead>
            <tr class="text-center bg-green-600 text-white">
              <th>Jun</th>
              <th>Day</th>
              <th>Fajr</th>
              <th>Fajr Iqamah</th>
              <th>Sunrise</th>
              <th>Zuhr</th>
              <th>Zuhr Iqamah</th>
              <th>Asr</th>
              <th>Asr Iqamah</th>
              <th>Maghrib</th>
              <th>Maghrib Iqamah</th>
              <th>Isha</th>
              <th>Isha Iqamah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Mon </td>
              <td>4:53AM </td>
              <td>5:20AM </td>
              <td>6:13AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:01PM </td>
              <td>8:06PM </td>
              <td>9:18PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Tue </td>
              <td>4:52AM </td>
              <td>5:20AM </td>
              <td>6:12AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:02PM </td>
              <td>8:07PM </td>
              <td>9:19PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Wed </td>
              <td>4:50AM </td>
              <td>5:20AM </td>
              <td>6:10AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:03PM </td>
              <td>8:08PM </td>
              <td>9:20PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Thu </td>
              <td>4:49AM </td>
              <td>5:20AM </td>
              <td>6:09AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:04PM </td>
              <td>8:09PM </td>
              <td>9:21PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Fri </td>
              <td>4:48AM </td>
              <td>5:20AM </td>
              <td>6:08AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:05PM </td>
              <td>8:10PM </td>
              <td>9:22PM </td>
              <td>9:40PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Sat </td>
              <td>4:46AM </td>
              <td>5:10AM </td>
              <td>6:07AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:53PM </td>
              <td>5:15PM </td>
              <td>8:06PM </td>
              <td>8:11PM </td>
              <td>9:24PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Sun </td>
              <td>4:45AM </td>
              <td>5:10AM </td>
              <td>6:06AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:07PM </td>
              <td>8:12PM </td>
              <td>9:25PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Mon </td>
              <td>4:44AM </td>
              <td>5:10AM </td>
              <td>6:05AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:07PM </td>
              <td>8:12PM </td>
              <td>9:26PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Tue </td>
              <td>4:42AM </td>
              <td>5:10AM </td>
              <td>6:04AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:08PM </td>
              <td>8:13PM </td>
              <td>9:27PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Wed </td>
              <td>4:41AM </td>
              <td>5:10AM </td>
              <td>6:03AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:09PM </td>
              <td>8:14PM </td>
              <td>9:28PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Thu </td>
              <td>4:40AM </td>
              <td>5:10AM </td>
              <td>6:02AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:10PM </td>
              <td>8:15PM </td>
              <td>9:30PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Fri </td>
              <td>4:39AM </td>
              <td>5:10AM </td>
              <td>6:01AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:54PM </td>
              <td>5:15PM </td>
              <td>8:11PM </td>
              <td>8:16PM </td>
              <td>9:31PM </td>
              <td>9:50PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Sat </td>
              <td>4:37AM </td>
              <td>5:00AM </td>
              <td>6:00AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>8:12PM </td>
              <td>8:17PM </td>
              <td>9:32PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Sun </td>
              <td>4:36AM </td>
              <td>5:00AM </td>
              <td>6:00AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>8:13PM </td>
              <td>8:18PM </td>
              <td>9:33PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Mon </td>
              <td>4:35AM </td>
              <td>5:00AM </td>
              <td>5:59AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>8:13PM </td>
              <td>8:18PM </td>
              <td>9:34PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Tue </td>
              <td>4:34AM </td>
              <td>5:00AM </td>
              <td>5:58AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>8:14PM </td>
              <td>8:19PM </td>
              <td>9:35PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Wed </td>
              <td>4:33AM </td>
              <td>5:00AM </td>
              <td>5:57AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:55PM </td>
              <td>5:15PM </td>
              <td>8:15PM </td>
              <td>8:20PM </td>
              <td>9:36PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Thu </td>
              <td>4:32AM </td>
              <td>5:00AM </td>
              <td>5:56AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>8:16PM </td>
              <td>8:21PM </td>
              <td>9:38PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Fri </td>
              <td>4:31AM </td>
              <td>5:00AM </td>
              <td>5:56AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>8:17PM </td>
              <td>8:22PM </td>
              <td>9:39PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Sat </td>
              <td>4:30AM </td>
              <td>5:00AM </td>
              <td>5:55AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>8:18PM </td>
              <td>8:23PM </td>
              <td>9:40PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Sun </td>
              <td>4:29AM </td>
              <td>5:00AM </td>
              <td>5:54AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>8:18PM </td>
              <td>8:23PM </td>
              <td>9:41PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Mon </td>
              <td>4:28AM </td>
              <td>5:00AM </td>
              <td>5:53AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:56PM </td>
              <td>5:15PM </td>
              <td>8:19PM </td>
              <td>8:24PM </td>
              <td>9:42PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Tue </td>
              <td>4:27AM </td>
              <td>5:00AM </td>
              <td>5:53AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>8:20PM </td>
              <td>8:25PM </td>
              <td>9:43PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Wed </td>
              <td>4:26AM </td>
              <td>5:00AM </td>
              <td>5:52AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>8:21PM </td>
              <td>8:26PM </td>
              <td>9:44PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Thu </td>
              <td>4:25AM </td>
              <td>5:00AM </td>
              <td>5:52AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>8:21PM </td>
              <td>8:26PM </td>
              <td>9:45PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Fri </td>
              <td>4:25AM </td>
              <td>5:00AM </td>
              <td>5:51AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>8:22PM </td>
              <td>8:27PM </td>
              <td>9:46PM </td>
              <td>10:00PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Sat </td>
              <td>4:24AM </td>
              <td>5:00AM </td>
              <td>5:51AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:57PM </td>
              <td>5:15PM </td>
              <td>8:23PM </td>
              <td>8:28PM </td>
              <td>9:47PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Sun </td>
              <td>4:23AM </td>
              <td>5:00AM </td>
              <td>5:50AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:24PM </td>
              <td>8:29PM </td>
              <td>9:48PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Mon </td>
              <td>4:22AM </td>
              <td>5:00AM </td>
              <td>5:50AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:24PM </td>
              <td>8:29PM </td>
              <td>9:49PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Tue </td>
              <td>4:22AM </td>
              <td>5:00AM </td>
              <td>5:49AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:25PM </td>
              <td>8:30PM </td>
              <td>9:50PM </td>
              <td>10:10PM </td>
            </tr>
            <tr>
              <td>31</td>
              <td>Wed </td>
              <td>4:21AM </td>
              <td>5:00AM </td>
              <td>5:49AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:58PM </td>
              <td>5:15PM </td>
              <td>8:26PM </td>
              <td>8:31PM </td>
              <td>9:51PM </td>
              <td>10:10PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default fiveMonth;
