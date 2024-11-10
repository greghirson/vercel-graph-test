
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-10 06:00:00", "b": 401.4}, {"a": "2024-11-10 06:05:00", "b": 402.6666666666667}, {"a": "2024-11-10 06:10:00", "b": 402.0}, {"a": "2024-11-10 06:15:00", "b": 402.0}, {"a": "2024-11-10 06:20:00", "b": 401.5}, {"a": "2024-11-10 06:25:00", "b": 402.2}, {"a": "2024-11-10 06:30:00", "b": 401.75}, {"a": "2024-11-10 06:35:00", "b": 402.5}, {"a": "2024-11-10 06:40:00", "b": 402.2}, {"a": "2024-11-10 06:45:00", "b": 401.4}, {"a": "2024-11-10 06:50:00", "b": 402.3333333333333}, {"a": "2024-11-10 06:55:00", "b": 402.0}, {"a": "2024-11-10 07:00:00", "b": 402.3333333333333}, {"a": "2024-11-10 07:05:00", "b": 401.75}, {"a": "2024-11-10 07:10:00", "b": 401.4}, {"a": "2024-11-10 07:15:00", "b": 402.25}, {"a": "2024-11-10 07:20:00", "b": 401.25}, {"a": "2024-11-10 07:25:00", "b": 402.25}, {"a": "2024-11-10 07:30:00", "b": 403.0}, {"a": "2024-11-10 07:35:00", "b": 406.0}, {"a": "2024-11-10 07:40:00", "b": 411.2}, {"a": "2024-11-10 07:45:00", "b": 444.25}, {"a": "2024-11-10 07:50:00", "b": 478.4}, {"a": "2024-11-10 07:55:00", "b": 493.2}, {"a": "2024-11-10 08:00:00", "b": 498.5}, {"a": "2024-11-10 08:05:00", "b": 504.8}, {"a": "2024-11-10 08:10:00", "b": 499.2}, {"a": "2024-11-10 08:15:00", "b": 502.0}, {"a": "2024-11-10 08:20:00", "b": 506.0}, {"a": "2024-11-10 08:25:00", "b": 517.75}, {"a": "2024-11-10 08:30:00", "b": 523.8}, {"a": "2024-11-10 08:35:00", "b": 535.8}, {"a": "2024-11-10 08:40:00", "b": 547.8}, {"a": "2024-11-10 08:45:00", "b": 540.4}, {"a": "2024-11-10 08:50:00", "b": 538.6}, {"a": "2024-11-10 08:55:00", "b": 550.0}, {"a": "2024-11-10 09:00:00", "b": 556.4}, {"a": "2024-11-10 09:05:00", "b": 561.25}, {"a": "2024-11-10 09:10:00", "b": 550.2}, {"a": "2024-11-10 09:15:00", "b": 561.0}, {"a": "2024-11-10 09:20:00", "b": 567.2}, {"a": "2024-11-10 09:25:00", "b": 558.0}, {"a": "2024-11-10 09:30:00", "b": 547.6}, {"a": "2024-11-10 09:35:00", "b": 565.2}, {"a": "2024-11-10 09:40:00", "b": 565.0}, {"a": "2024-11-10 09:45:00", "b": 578.0}, {"a": "2024-11-10 09:50:00", "b": 595.0}, {"a": "2024-11-10 09:55:00", "b": 599.6}, {"a": "2024-11-10 10:00:00", "b": 593.6}, {"a": "2024-11-10 10:05:00", "b": 581.8}, {"a": "2024-11-10 10:10:00", "b": 570.2}, {"a": "2024-11-10 10:15:00", "b": 573.4}, {"a": "2024-11-10 10:20:00", "b": 575.0}, {"a": "2024-11-10 10:25:00", "b": 568.0}, {"a": "2024-11-10 10:30:00", "b": 550.8}, {"a": "2024-11-10 10:35:00", "b": 551.2}, {"a": "2024-11-10 10:40:00", "b": 568.8}, {"a": "2024-11-10 10:45:00", "b": 594.0}, {"a": "2024-11-10 10:50:00", "b": 668.4}, {"a": "2024-11-10 10:55:00", "b": 717.4}, {"a": "2024-11-10 11:00:00", "b": 744.2}, {"a": "2024-11-10 11:05:00", "b": 747.0}, {"a": "2024-11-10 11:10:00", "b": 705.8}, {"a": "2024-11-10 11:15:00", "b": 666.0}, {"a": "2024-11-10 11:20:00", "b": 672.2}, {"a": "2024-11-10 11:25:00", "b": 638.0}, {"a": "2024-11-10 11:30:00", "b": 618.8}, {"a": "2024-11-10 11:35:00", "b": 618.8}, {"a": "2024-11-10 11:40:00", "b": 612.75}, {"a": "2024-11-10 11:45:00", "b": 597.0}, {"a": "2024-11-10 11:50:00", "b": 599.6}, {"a": "2024-11-10 11:55:00", "b": 576.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    