import Container from "@/components/Container";
import React from "react";
import { useRouter } from "next/router";

const twelveMonth = () => {
  const router = useRouter();
  return (
    <div className="pt-[120px] mb-10 ">
      <Container>
        <div className="flex justify-between my-5 items-center">
          <div className="font-bold text-3xl">
            December, 2023 | Jumada Al-Awwal
          </div>
          <div className="font-bold text-3xl">
            <button
              className="bg-green-600 p-2 text-white rounded-md "
              onClick={() => router.push("/FirstMonth")}
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
              <td>5:48AM </td>
              <td>6:10AM </td>
              <td>7:04AM </td>
              <td>12:01PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>02</td>
              <td>Sat </td>
              <td>5:49AM </td>
              <td>6:10AM </td>
              <td>7:05AM </td>
              <td>12:01PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>03</td>
              <td>Sun </td>
              <td>5:50AM </td>
              <td>6:10AM </td>
              <td>7:05AM </td>
              <td>12:01PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:52PM </td>
              <td>4:57PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>04</td>
              <td>Mon </td>
              <td>5:50AM </td>
              <td>6:10AM </td>
              <td>7:06AM </td>
              <td>12:02PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:52PM </td>
              <td>4:57PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>05</td>
              <td>Tue </td>
              <td>5:51AM </td>
              <td>6:10AM </td>
              <td>7:07AM </td>
              <td>12:02PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:52PM </td>
              <td>4:57PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>06</td>
              <td>Wed </td>
              <td>5:52AM </td>
              <td>6:10AM </td>
              <td>7:08AM </td>
              <td>12:03PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:52PM </td>
              <td>4:57PM </td>
              <td>6:07PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>07</td>
              <td>Thu </td>
              <td>5:53AM </td>
              <td>6:10AM </td>
              <td>7:09AM </td>
              <td>12:03PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>08</td>
              <td>Fri </td>
              <td>5:53AM </td>
              <td>6:10AM </td>
              <td>7:10AM </td>
              <td>12:04PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>09</td>
              <td>Sat </td>
              <td>5:54AM </td>
              <td>6:20AM </td>
              <td>7:11AM </td>
              <td>12:04PM </td>
              <td>12:35PM </td>
              <td>2:32PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>10</td>
              <td>Sun </td>
              <td>5:55AM </td>
              <td>6:20AM </td>
              <td>7:11AM </td>
              <td>12:04PM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>11</td>
              <td>Mon </td>
              <td>5:55AM </td>
              <td>6:20AM </td>
              <td>7:12AM </td>
              <td>12:05PM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:08PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>12</td>
              <td>Tue </td>
              <td>5:56AM </td>
              <td>6:20AM </td>
              <td>7:13AM </td>
              <td>12:05PM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:53PM </td>
              <td>4:58PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>13</td>
              <td>Wed </td>
              <td>5:57AM </td>
              <td>6:20AM </td>
              <td>7:14AM </td>
              <td>12:06PM </td>
              <td>12:35PM </td>
              <td>2:33PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>14</td>
              <td>Thu </td>
              <td>5:57AM </td>
              <td>6:20AM </td>
              <td>7:14AM </td>
              <td>12:06PM </td>
              <td>12:35PM </td>
              <td>2:34PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:09PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>15</td>
              <td>Fri </td>
              <td>5:58AM </td>
              <td>6:20AM </td>
              <td>7:15AM </td>
              <td>12:07PM </td>
              <td>12:35PM </td>
              <td>2:34PM </td>
              <td>3:00PM </td>
              <td>4:54PM </td>
              <td>4:59PM </td>
              <td>6:10PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>16</td>
              <td>Sat </td>
              <td>5:59AM </td>
              <td>6:20AM </td>
              <td>7:16AM </td>
              <td>12:07PM </td>
              <td>12:35PM </td>
              <td>2:34PM </td>
              <td>3:00PM </td>
              <td>4:55PM </td>
              <td>5:00PM </td>
              <td>6:10PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>17</td>
              <td>Sun </td>
              <td>5:59AM </td>
              <td>6:20AM </td>
              <td>7:16AM </td>
              <td>12:08PM </td>
              <td>12:35PM </td>
              <td>2:35PM </td>
              <td>3:00PM </td>
              <td>4:55PM </td>
              <td>5:00PM </td>
              <td>6:10PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>18</td>
              <td>Mon </td>
              <td>6:00AM </td>
              <td>6:20AM </td>
              <td>7:17AM </td>
              <td>12:08PM </td>
              <td>12:35PM </td>
              <td>2:35PM </td>
              <td>3:00PM </td>
              <td>4:55PM </td>
              <td>5:00PM </td>
              <td>6:11PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>19</td>
              <td>Tue </td>
              <td>6:00AM </td>
              <td>6:20AM </td>
              <td>7:17AM </td>
              <td>12:09PM </td>
              <td>12:35PM </td>
              <td>2:36PM </td>
              <td>3:00PM </td>
              <td>4:56PM </td>
              <td>5:01PM </td>
              <td>6:11PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>20</td>
              <td>Wed </td>
              <td>6:01AM </td>
              <td>6:20AM </td>
              <td>7:18AM </td>
              <td>12:09PM </td>
              <td>12:35PM </td>
              <td>2:36PM </td>
              <td>3:00PM </td>
              <td>4:56PM </td>
              <td>5:01PM </td>
              <td>6:12PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>21</td>
              <td>Thu </td>
              <td>6:01AM </td>
              <td>6:20AM </td>
              <td>7:18AM </td>
              <td>12:10PM </td>
              <td>12:35PM </td>
              <td>2:37PM </td>
              <td>3:00PM </td>
              <td>4:57PM </td>
              <td>5:02PM </td>
              <td>6:12PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>22</td>
              <td>Fri </td>
              <td>6:02AM </td>
              <td>6:20AM </td>
              <td>7:19AM </td>
              <td>12:10PM </td>
              <td>12:35PM </td>
              <td>2:37PM </td>
              <td>3:00PM </td>
              <td>4:57PM </td>
              <td>5:02PM </td>
              <td>6:13PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>23</td>
              <td>Sat </td>
              <td>6:02AM </td>
              <td>6:30AM </td>
              <td>7:19AM </td>
              <td>12:11PM </td>
              <td>12:35PM </td>
              <td>2:38PM </td>
              <td>3:00PM </td>
              <td>4:58PM </td>
              <td>5:03PM </td>
              <td>6:13PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>24</td>
              <td>Sun </td>
              <td>6:03AM </td>
              <td>6:30AM </td>
              <td>7:20AM </td>
              <td>12:11PM </td>
              <td>12:35PM </td>
              <td>2:38PM </td>
              <td>3:00PM </td>
              <td>4:59PM </td>
              <td>5:04PM </td>
              <td>6:14PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>25</td>
              <td>Mon </td>
              <td>6:03AM </td>
              <td>6:30AM </td>
              <td>7:20AM </td>
              <td>12:12PM </td>
              <td>12:35PM </td>
              <td>2:39PM </td>
              <td>3:00PM </td>
              <td>4:59PM </td>
              <td>5:04PM </td>
              <td>6:15PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>26</td>
              <td>Tue </td>
              <td>6:03AM </td>
              <td>6:30AM </td>
              <td>7:20AM </td>
              <td>12:12PM </td>
              <td>12:35PM </td>
              <td>2:40PM </td>
              <td>3:00PM </td>
              <td>5:00PM </td>
              <td>5:05PM </td>
              <td>6:15PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>27</td>
              <td>Wed </td>
              <td>6:04AM </td>
              <td>6:30AM </td>
              <td>7:21AM </td>
              <td>12:13PM </td>
              <td>12:35PM </td>
              <td>2:40PM </td>
              <td>3:00PM </td>
              <td>5:01PM </td>
              <td>5:06PM </td>
              <td>6:16PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>28</td>
              <td>Thu </td>
              <td>6:04AM </td>
              <td>6:30AM </td>
              <td>7:21AM </td>
              <td>12:13PM </td>
              <td>12:35PM </td>
              <td>2:41PM </td>
              <td>3:00PM </td>
              <td>5:01PM </td>
              <td>5:06PM </td>
              <td>6:17PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>29</td>
              <td>Fri </td>
              <td>6:04AM </td>
              <td>6:30AM </td>
              <td>7:21AM </td>
              <td>12:14PM </td>
              <td>12:35PM </td>
              <td>2:42PM </td>
              <td>3:00PM </td>
              <td>5:02PM </td>
              <td>5:07PM </td>
              <td>6:17PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>30</td>
              <td>Sat </td>
              <td>6:05AM </td>
              <td>6:30AM </td>
              <td>7:21AM </td>
              <td>12:14PM </td>
              <td>12:35PM </td>
              <td>2:42PM </td>
              <td>3:00PM </td>
              <td>5:03PM </td>
              <td>5:08PM </td>
              <td>6:18PM </td>
              <td>8:00PM </td>
            </tr>
            <tr>
              <td>31</td>
              <td>Sun </td>
              <td>6:05AM </td>
              <td>6:30AM </td>
              <td>7:22AM </td>
              <td>12:15PM </td>
              <td>12:35PM </td>
              <td>2:43PM </td>
              <td>3:00PM </td>
              <td>5:04PM </td>
              <td>5:09PM </td>
              <td>6:19PM </td>
              <td>8:00PM </td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default twelveMonth;
