
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-02 08:00:00", "b": 3765.0}, {"a": "2024-12-02 08:05:00", "b": 3823.2}, {"a": "2024-12-02 08:10:00", "b": 3839.4}, {"a": "2024-12-02 08:15:00", "b": 3810.8}, {"a": "2024-12-02 08:20:00", "b": 3849.8}, {"a": "2024-12-02 08:25:00", "b": 3855.4}, {"a": "2024-12-02 08:30:00", "b": 3873.6}, {"a": "2024-12-02 08:35:00", "b": 3804.6}, {"a": "2024-12-02 08:40:00", "b": 3758.6}, {"a": "2024-12-02 08:45:00", "b": 3933.4}, {"a": "2024-12-02 08:50:00", "b": 3789.0}, {"a": "2024-12-02 08:55:00", "b": 3777.2}, {"a": "2024-12-02 09:00:00", "b": 3673.2}, {"a": "2024-12-02 09:05:00", "b": 3601.2}, {"a": "2024-12-02 09:10:00", "b": 3523.8}, {"a": "2024-12-02 09:15:00", "b": 2986.8}, {"a": "2024-12-02 09:20:00", "b": 1266.8}, {"a": "2024-12-02 09:25:00", "b": 582.2}, {"a": "2024-12-02 09:30:00", "b": 499.8}, {"a": "2024-12-02 09:35:00", "b": 510.0}, {"a": "2024-12-02 09:40:00", "b": 492.0}, {"a": "2024-12-02 09:45:00", "b": 522.8}, {"a": "2024-12-02 09:50:00", "b": 510.0}, {"a": "2024-12-02 09:55:00", "b": 516.0}, {"a": "2024-12-02 10:00:00", "b": 566.8}, {"a": "2024-12-02 10:05:00", "b": 685.8}, {"a": "2024-12-02 10:10:00", "b": 661.8}, {"a": "2024-12-02 10:15:00", "b": 724.2}, {"a": "2024-12-02 10:20:00", "b": 745.0}, {"a": "2024-12-02 10:25:00", "b": 784.0}, {"a": "2024-12-02 10:30:00", "b": 837.6}, {"a": "2024-12-02 10:35:00", "b": 831.8}, {"a": "2024-12-02 10:40:00", "b": 822.4}, {"a": "2024-12-02 10:45:00", "b": 842.4}, {"a": "2024-12-02 10:50:00", "b": 842.0}, {"a": "2024-12-02 10:55:00", "b": 873.2}, {"a": "2024-12-02 11:00:00", "b": 949.8}, {"a": "2024-12-02 11:05:00", "b": 876.4}, {"a": "2024-12-02 11:10:00", "b": 864.0}, {"a": "2024-12-02 11:15:00", "b": 856.2}, {"a": "2024-12-02 11:20:00", "b": 893.6}, {"a": "2024-12-02 11:25:00", "b": 907.4}, {"a": "2024-12-02 11:30:00", "b": 867.6}, {"a": "2024-12-02 11:35:00", "b": 865.2}, {"a": "2024-12-02 11:40:00", "b": 888.2}, {"a": "2024-12-02 11:45:00", "b": 848.4}, {"a": "2024-12-02 11:50:00", "b": 854.5}, {"a": "2024-12-02 11:55:00", "b": 887.4}, {"a": "2024-12-02 12:00:00", "b": 895.0}, {"a": "2024-12-02 12:05:00", "b": 940.0}, {"a": "2024-12-02 12:10:00", "b": 1054.25}, {"a": "2024-12-02 12:15:00", "b": 887.0}, {"a": "2024-12-02 12:20:00", "b": 2613.2}, {"a": "2024-12-02 12:25:00", "b": 3200.0}, {"a": "2024-12-02 12:30:00", "b": 1615.8}, {"a": "2024-12-02 12:35:00", "b": 405.2}, {"a": "2024-12-02 12:40:00", "b": 402.25}, {"a": "2024-12-02 12:45:00", "b": 401.75}, {"a": "2024-12-02 12:50:00", "b": 402.5}, {"a": "2024-12-02 12:55:00", "b": 402.0}, {"a": "2024-12-02 13:00:00", "b": 402.3333333333333}, {"a": "2024-12-02 13:05:00", "b": 401.5}, {"a": "2024-12-02 13:10:00", "b": 401.25}, {"a": "2024-12-02 13:15:00", "b": 810.5}, {"a": "2024-12-02 13:20:00", "b": 401.4}, {"a": "2024-12-02 13:25:00", "b": 410.8}, {"a": "2024-12-02 13:30:00", "b": 866.0}, {"a": "2024-12-02 13:35:00", "b": 632.6}, {"a": "2024-12-02 13:40:00", "b": 713.0}, {"a": "2024-12-02 13:45:00", "b": 729.4}, {"a": "2024-12-02 13:50:00", "b": 681.2}, {"a": "2024-12-02 13:55:00", "b": 709.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    