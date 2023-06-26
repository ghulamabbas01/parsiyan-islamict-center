import Container from "@/components/Container";
import React from "react";
import { useRouter } from "next/router";

const nineMonth = () => {
  const router = useRouter();
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">September, 2023 | Safar</div>
          <div className="font-bold text-3xl">
            <button
              className="bg-green-600 p-2 text-white rounded-md "
              onClick={() => router.push("/tenMonth")}
            >
              Next Month
            </button>
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
              <td>Fri </td>
              <td>5:25AM </td>
              <td>5:50AM </td>
              <td>6:38AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>4:47PM </td>
              <td>5:15PM </td>
              <td>7:37PM </td>
              <td>7:42PM </td>
              <td>8:52PM </td>
              <td>9:20PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Sat </td>
              <td>5:26AM </td>
              <td>5:50AM </td>
              <td>6:38AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>4:47PM </td>
              <td>5:00PM </td>
              <td>7:36PM </td>
              <td>7:41PM </td>
              <td>8:50PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Sun </td>
              <td>5:27AM </td>
              <td>5:50AM </td>
              <td>6:39AM </td>
              <td>1:11PM </td>
              <td>1:30PM </td>
              <td>4:46PM </td>
              <td>5:00PM </td>
              <td>7:35PM </td>
              <td>7:40PM </td>
              <td>8:49PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Mon </td>
              <td>5:28AM </td>
              <td>5:50AM </td>
              <td>6:40AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>4:45PM </td>
              <td>5:00PM </td>
              <td>7:33PM </td>
              <td>7:38PM </td>
              <td>8:47PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Tue </td>
              <td>5:29AM </td>
              <td>5:50AM </td>
              <td>6:41AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>4:44PM </td>
              <td>5:00PM </td>
              <td>7:32PM </td>
              <td>7:37PM </td>
              <td>8:45PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Wed </td>
              <td>5:30AM </td>
              <td>5:50AM </td>
              <td>6:42AM </td>
              <td>1:10PM </td>
              <td>1:30PM </td>
              <td>4:43PM </td>
              <td>5:00PM </td>
              <td>7:30PM </td>
              <td>7:35PM </td>
              <td>8:44PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Thu </td>
              <td>5:31AM </td>
              <td>5:50AM </td>
              <td>6:42AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:42PM </td>
              <td>5:00PM </td>
              <td>7:28PM </td>
              <td>7:33PM </td>
              <td>8:42PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Fri </td>
              <td>5:32AM </td>
              <td>5:50AM </td>
              <td>6:43AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:41PM </td>
              <td>5:00PM </td>
              <td>7:27PM </td>
              <td>7:32PM </td>
              <td>8:40PM </td>
              <td>9:10PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Sat </td>
              <td>5:33AM </td>
              <td>6:00AM </td>
              <td>6:44AM </td>
              <td>1:09PM </td>
              <td>1:30PM </td>
              <td>4:41PM </td>
              <td>5:00PM </td>
              <td>7:25PM </td>
              <td>7:30PM </td>
              <td>8:39PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sun </td>
              <td>5:34AM </td>
              <td>6:00AM </td>
              <td>6:45AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:40PM </td>
              <td>5:00PM </td>
              <td>7:24PM </td>
              <td>7:29PM </td>
              <td>8:37PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Mon </td>
              <td>5:35AM </td>
              <td>6:00AM </td>
              <td>6:46AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:39PM </td>
              <td>5:00PM </td>
              <td>7:22PM </td>
              <td>7:27PM </td>
              <td>8:35PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Tue </td>
              <td>5:35AM </td>
              <td>6:00AM </td>
              <td>6:47AM </td>
              <td>1:08PM </td>
              <td>1:30PM </td>
              <td>4:38PM </td>
              <td>5:00PM </td>
              <td>7:21PM </td>
              <td>7:26PM </td>
              <td>8:34PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Wed </td>
              <td>5:36AM </td>
              <td>6:00AM </td>
              <td>6:47AM </td>
              <td>1:07PM </td>
              <td>1:30PM </td>
              <td>4:37PM </td>
              <td>5:00PM </td>
              <td>7:19PM </td>
              <td>7:24PM </td>
              <td>8:32PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Thu </td>
              <td>5:37AM </td>
              <td>6:00AM </td>
              <td>6:48AM </td>
              <td>1:07PM </td>
              <td>1:30PM </td>
              <td>4:36PM </td>
              <td>5:00PM </td>
              <td>7:18PM </td>
              <td>7:23PM </td>
              <td>8:30PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Fri </td>
              <td>5:38AM </td>
              <td>6:00AM </td>
              <td>6:49AM </td>
              <td>1:07PM </td>
              <td>1:30PM </td>
              <td>4:35PM </td>
              <td>5:00PM </td>
              <td>7:16PM </td>
              <td>7:21PM </td>
              <td>8:29PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Sat </td>
              <td>5:39AM </td>
              <td>6:10AM </td>
              <td>6:50AM </td>
              <td>1:06PM </td>
              <td>1:30PM </td>
              <td>4:34PM </td>
              <td>4:45PM </td>
              <td>7:15PM </td>
              <td>7:20PM </td>
              <td>8:27PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Sun </td>
              <td>5:40AM </td>
              <td>6:10AM </td>
              <td>6:51AM </td>
              <td>1:06PM </td>
              <td>1:30PM </td>
              <td>4:33PM </td>
              <td>4:45PM </td>
              <td>7:13PM </td>
              <td>7:18PM </td>
              <td>8:26PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Mon </td>
              <td>5:41AM </td>
              <td>6:10AM </td>
              <td>6:52AM </td>
              <td>1:06PM </td>
              <td>1:30PM </td>
              <td>4:32PM </td>
              <td>4:45PM </td>
              <td>7:12PM </td>
              <td>7:17PM </td>
              <td>8:24PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Tue </td>
              <td>5:42AM </td>
              <td>6:10AM </td>
              <td>6:52AM </td>
              <td>1:05PM </td>
              <td>1:30PM </td>
              <td>4:31PM </td>
              <td>4:45PM </td>
              <td>7:10PM </td>
              <td>7:15PM </td>
              <td>8:22PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Wed </td>
              <td>5:43AM </td>
              <td>6:10AM </td>
              <td>6:53AM </td>
              <td>1:05PM </td>
              <td>1:30PM </td>
              <td>4:30PM </td>
              <td>4:45PM </td>
              <td>7:09PM </td>
              <td>7:14PM </td>
              <td>8:21PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Thu </td>
              <td>5:44AM </td>
              <td>6:10AM </td>
              <td>6:54AM </td>
              <td>1:04PM </td>
              <td>1:30PM </td>
              <td>4:29PM </td>
              <td>4:45PM </td>
              <td>7:07PM </td>
              <td>7:12PM </td>
              <td>8:19PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Fri </td>
              <td>5:45AM </td>
              <td>6:10AM </td>
              <td>6:55AM </td>
              <td>1:04PM </td>
              <td>1:30PM </td>
              <td>4:28PM </td>
              <td>4:45PM </td>
              <td>7:05PM </td>
              <td>7:10PM </td>
              <td>8:17PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Sat </td>
              <td>5:46AM </td>
              <td>6:10AM </td>
              <td>6:56AM </td>
              <td>1:04PM </td>
              <td>1:30PM </td>
              <td>4:27PM </td>
              <td>4:45PM </td>
              <td>7:04PM </td>
              <td>7:09PM </td>
              <td>8:16PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Sun </td>
              <td>5:47AM </td>
              <td>6:10AM </td>
              <td>6:57AM </td>
              <td>1:03PM </td>
              <td>1:30PM </td>
              <td>4:26PM </td>
              <td>4:45PM </td>
              <td>7:02PM </td>
              <td>7:07PM </td>
              <td>8:14PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Mon </td>
              <td>5:47AM </td>
              <td>6:10AM </td>
              <td>6:57AM </td>
              <td>1:03PM </td>
              <td>1:30PM </td>
              <td>4:25PM </td>
              <td>4:45PM </td>
              <td>7:01PM </td>
              <td>7:06PM </td>
              <td>8:13PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Tue </td>
              <td>5:48AM </td>
              <td>6:10AM </td>
              <td>6:58AM </td>
              <td>1:03PM </td>
              <td>1:30PM </td>
              <td>4:24PM </td>
              <td>4:45PM </td>
              <td>6:59PM </td>
              <td>7:04PM </td>
              <td>8:11PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Wed </td>
              <td>5:49AM </td>
              <td>6:10AM </td>
              <td>6:59AM </td>
              <td>1:02PM </td>
              <td>1:30PM </td>
              <td>4:23PM </td>
              <td>4:45PM </td>
              <td>6:58PM </td>
              <td>7:03PM </td>
              <td>8:09PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Thu </td>
              <td>5:50AM </td>
              <td>6:10AM </td>
              <td>7:00AM </td>
              <td>1:02PM </td>
              <td>1:30PM </td>
              <td>4:22PM </td>
              <td>4:45PM </td>
              <td>6:56PM </td>
              <td>7:01PM </td>
              <td>8:08PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Fri </td>
              <td>5:51AM </td>
              <td>6:10AM </td>
              <td>7:01AM </td>
              <td>1:02PM </td>
              <td>1:30PM </td>
              <td>4:21PM </td>
              <td>4:45PM </td>
              <td>6:55PM </td>
              <td>7:00PM </td>
              <td>8:06PM </td>
              <td>8:40PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Sat </td>
              <td>5:52AM </td>
              <td>6:20AM </td>
              <td>7:02AM </td>
              <td>1:01PM </td>
              <td>1:30PM </td>
              <td>4:19PM </td>
              <td>4:30PM </td>
              <td>6:53PM </td>
              <td>6:58PM </td>
              <td>8:05PM </td>
              <td>8:30PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default nineMonth;
