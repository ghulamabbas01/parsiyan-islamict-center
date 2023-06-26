import Container from "@/components/Container";
import React from "react";
import { useRouter } from "next/router";

const towMonth = () => {
  const router = useRouter();
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">March, 2023 | Shaban</div>
          <div className="font-bold text-3xl">
            <button
              className="bg-green-600 p-2 text-white rounded-md "
              onClick={() => router.push("/fourMonth")}
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
              <td>Wed </td>
              <td>5:27AM </td>
              <td>5:50AM </td>
              <td>6:38AM </td>
              <td>12:24PM </td>
              <td>12:35PM </td>
              <td>3:33PM </td>
              <td>3:45PM </td>
              <td>6:06PM </td>
              <td>6:11PM </td>
              <td>7:15PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Thu </td>
              <td>5:25AM </td>
              <td>5:50AM </td>
              <td>6:36AM </td>
              <td>12:23PM </td>
              <td>12:35PM </td>
              <td>3:34PM </td>
              <td>3:45PM </td>
              <td>6:07PM </td>
              <td>6:12PM </td>
              <td>7:16PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Fri </td>
              <td>5:23AM </td>
              <td>5:50AM </td>
              <td>6:35AM </td>
              <td>12:23PM </td>
              <td>12:35PM </td>
              <td>3:35PM </td>
              <td>3:45PM </td>
              <td>6:08PM </td>
              <td>6:13PM </td>
              <td>7:17PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Sat </td>
              <td>5:22AM </td>
              <td>5:40AM </td>
              <td>6:33AM </td>
              <td>12:23PM </td>
              <td>12:35PM </td>
              <td>3:35PM </td>
              <td>4:00PM </td>
              <td>6:09PM </td>
              <td>6:14PM </td>
              <td>7:18PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Sun </td>
              <td>5:21AM </td>
              <td>5:40AM </td>
              <td>6:32AM </td>
              <td>12:23PM </td>
              <td>12:35PM </td>
              <td>3:36PM </td>
              <td>4:00PM </td>
              <td>6:09PM </td>
              <td>6:14PM </td>
              <td>7:19PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Mon </td>
              <td>5:20AM </td>
              <td>5:40AM </td>
              <td>6:31AM </td>
              <td>12:22PM </td>
              <td>12:35PM </td>
              <td>3:36PM </td>
              <td>4:00PM </td>
              <td>6:10PM </td>
              <td>6:15PM </td>
              <td>7:20PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Tue </td>
              <td>5:18AM </td>
              <td>5:40AM </td>
              <td>6:29AM </td>
              <td>12:22PM </td>
              <td>12:35PM </td>
              <td>3:37PM </td>
              <td>4:00PM </td>
              <td>6:11PM </td>
              <td>6:16PM </td>
              <td>7:21PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Wed </td>
              <td>5:17AM </td>
              <td>5:40AM </td>
              <td>6:29AM </td>
              <td>12:22PM </td>
              <td>12:35PM </td>
              <td>3:37PM </td>
              <td>4:00PM </td>
              <td>6:12PM </td>
              <td>6:17PM </td>
              <td>7:21PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Thu </td>
              <td>5:16AM </td>
              <td>5:40AM </td>
              <td>6:28AM </td>
              <td>12:22PM </td>
              <td>12:35PM </td>
              <td>3:38PM </td>
              <td>4:00PM </td>
              <td>6:13PM </td>
              <td>6:18PM </td>
              <td>7:21PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Fri </td>
              <td>5:15AM </td>
              <td>5:40AM </td>
              <td>6:26AM </td>
              <td>12:22PM </td>
              <td>12:35PM </td>
              <td>3:38PM </td>
              <td>4:00PM </td>
              <td>6:14PM </td>
              <td>6:19PM </td>
              <td>7:22PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Sat </td>
              <td>5:13AM </td>
              <td>5:40AM </td>
              <td>6:25AM </td>
              <td>12:21PM </td>
              <td>12:35PM </td>
              <td>3:39PM </td>
              <td>4:00PM </td>
              <td>6:15PM </td>
              <td>6:20PM </td>
              <td>7:23PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Sun </td>
              <td>6:12AM </td>
              <td>6:30AM </td>
              <td>7:23AM </td>
              <td>1:21PM </td>
              <td>1:30PM </td>
              <td>4:39PM </td>
              <td>5:00PM </td>
              <td>7:16PM </td>
              <td>7:21PM </td>
              <td>8:24PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Mon </td>
              <td>6:10AM </td>
              <td>6:30AM </td>
              <td>7:22AM </td>
              <td>1:21PM </td>
              <td>1:30PM </td>
              <td>4:40PM </td>
              <td>5:00PM </td>
              <td>7:17PM </td>
              <td>7:22PM </td>
              <td>8:25PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Tue </td>
              <td>6:09AM </td>
              <td>6:30AM </td>
              <td>7:20AM </td>
              <td>1:21PM </td>
              <td>1:30PM </td>
              <td>4:40PM </td>
              <td>5:00PM </td>
              <td>7:18PM </td>
              <td>7:23PM </td>
              <td>8:26PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Wed </td>
              <td>6:07AM </td>
              <td>6:30AM </td>
              <td>7:19AM </td>
              <td>1:20PM </td>
              <td>1:30PM </td>
              <td>4:40PM </td>
              <td>5:00PM </td>
              <td>7:19PM </td>
              <td>7:24PM </td>
              <td>8:27PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Thu </td>
              <td>6:06AM </td>
              <td>6:30AM </td>
              <td>7:17AM </td>
              <td>1:20PM </td>
              <td>1:30PM </td>
              <td>4:41PM </td>
              <td>5:00PM </td>
              <td>7:20PM </td>
              <td>7:25PM </td>
              <td>8:28PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Fri </td>
              <td>6:04AM </td>
              <td>6:30AM </td>
              <td>7:16AM </td>
              <td>1:20PM </td>
              <td>1:30PM </td>
              <td>4:41PM </td>
              <td>5:00PM </td>
              <td>7:21PM </td>
              <td>7:26PM </td>
              <td>8:29PM </td>
              <td>8:50PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Sat </td>
              <td>6:03AM </td>
              <td>6:20AM </td>
              <td>7:14AM </td>
              <td>1:19PM </td>
              <td>1:30PM </td>
              <td>4:42PM </td>
              <td>5:00PM </td>
              <td>7:22PM </td>
              <td>7:27PM </td>
              <td>8:30PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Sun </td>
              <td>6:02AM </td>
              <td>6:20AM </td>
              <td>7:13AM </td>
              <td>1:19PM </td>
              <td>1:30PM </td>
              <td>4:42PM </td>
              <td>5:00PM </td>
              <td>7:22PM </td>
              <td>7:27PM </td>
              <td>8:31PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Mon </td>
              <td>6:00AM </td>
              <td>6:20AM </td>
              <td>7:11AM </td>
              <td>1:19PM </td>
              <td>1:30PM </td>
              <td>4:43PM </td>
              <td>5:00PM </td>
              <td>7:23PM </td>
              <td>7:28PM </td>
              <td>8:32PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Tue </td>
              <td>5:58AM </td>
              <td>6:20AM </td>
              <td>7:10AM </td>
              <td>1:19PM </td>
              <td>1:30PM </td>
              <td>4:43PM </td>
              <td>5:00PM </td>
              <td>7:24PM </td>
              <td>7:29PM </td>
              <td>8:33PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Wed </td>
              <td>5:56AM </td>
              <td>6:20AM </td>
              <td>7:08AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>4:43PM </td>
              <td>5:00PM </td>
              <td>7:25PM </td>
              <td>7:30PM </td>
              <td>8:34PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Thu </td>
              <td>5:55AM </td>
              <td>6:10AM </td>
              <td>7:07AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>4:44PM </td>
              <td>5:00PM </td>
              <td>7:26PM </td>
              <td>7:31PM </td>
              <td>8:35PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Fri </td>
              <td>5:53AM </td>
              <td>6:10AM </td>
              <td>7:05AM </td>
              <td>1:18PM </td>
              <td>1:30PM </td>
              <td>4:44PM </td>
              <td>5:00PM </td>
              <td>7:27PM </td>
              <td>7:32PM </td>
              <td>8:36PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Sat </td>
              <td>5:52AM </td>
              <td>6:10AM </td>
              <td>7:04AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>4:44PM </td>
              <td>5:00PM </td>
              <td>7:28PM </td>
              <td>7:33PM </td>
              <td>8:37PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Sun </td>
              <td>5:50AM </td>
              <td>6:10AM </td>
              <td>7:02AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>4:45PM </td>
              <td>5:00PM </td>
              <td>7:29PM </td>
              <td>7:34PM </td>
              <td>8:38PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Mon </td>
              <td>5:48AM </td>
              <td>6:10AM </td>
              <td>7:01AM </td>
              <td>1:17PM </td>
              <td>1:30PM </td>
              <td>4:45PM </td>
              <td>5:00PM </td>
              <td>7:30PM </td>
              <td>7:35PM </td>
              <td>8:39PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Tue </td>
              <td>5:47AM </td>
              <td>6:10AM </td>
              <td>6:59AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:45PM </td>
              <td>5:00PM </td>
              <td>7:31PM </td>
              <td>7:36PM </td>
              <td>8:40PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Wed </td>
              <td>5:45AM </td>
              <td>6:10AM </td>
              <td>6:58AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:46PM </td>
              <td>5:00PM </td>
              <td>7:31PM </td>
              <td>7:36PM </td>
              <td>8:41PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Thu </td>
              <td>5:44AM </td>
              <td>6:10AM </td>
              <td>6:56AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:46PM </td>
              <td>5:00PM </td>
              <td>7:32PM </td>
              <td>7:37PM </td>
              <td>8:42PM </td>
              <td>9:00PM </td>
            </tr>
            <tr>
              <td>31</td>
              <td>Fri </td>
              <td>5:42AM </td>
              <td>6:10AM </td>
              <td>6:55AM </td>
              <td>1:16PM </td>
              <td>1:30PM </td>
              <td>4:46PM </td>
              <td>5:00PM </td>
              <td>7:33PM </td>
              <td>7:38PM </td>
              <td>8:43PM </td>
              <td>9:00PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default towMonth;
