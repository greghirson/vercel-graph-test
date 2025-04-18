
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-18 07:00:00", "b": 561.5}, {"a": "2025-04-18 07:05:00", "b": 567.5}, {"a": "2025-04-18 07:10:00", "b": 568.75}, {"a": "2025-04-18 07:15:00", "b": 570.0}, {"a": "2025-04-18 07:20:00", "b": 556.6}, {"a": "2025-04-18 07:25:00", "b": 560.4}, {"a": "2025-04-18 07:30:00", "b": 546.5}, {"a": "2025-04-18 07:35:00", "b": 544.0}, {"a": "2025-04-18 07:40:00", "b": 592.2}, {"a": "2025-04-18 07:45:00", "b": 671.2}, {"a": "2025-04-18 07:50:00", "b": 675.0}, {"a": "2025-04-18 07:55:00", "b": 671.75}, {"a": "2025-04-18 08:00:00", "b": 687.0}, {"a": "2025-04-18 08:05:00", "b": 679.0}, {"a": "2025-04-18 08:10:00", "b": 674.75}, {"a": "2025-04-18 08:15:00", "b": 682.0}, {"a": "2025-04-18 08:20:00", "b": 683.8}, {"a": "2025-04-18 08:25:00", "b": 670.0}, {"a": "2025-04-18 08:30:00", "b": 662.6}, {"a": "2025-04-18 08:35:00", "b": 661.6}, {"a": "2025-04-18 08:40:00", "b": 643.0}, {"a": "2025-04-18 08:45:00", "b": 659.2}, {"a": "2025-04-18 08:50:00", "b": 664.4}, {"a": "2025-04-18 08:55:00", "b": 658.25}, {"a": "2025-04-18 09:00:00", "b": 665.25}, {"a": "2025-04-18 09:05:00", "b": 674.8}, {"a": "2025-04-18 09:10:00", "b": 643.25}, {"a": "2025-04-18 09:15:00", "b": 625.0}, {"a": "2025-04-18 09:20:00", "b": 625.6}, {"a": "2025-04-18 09:25:00", "b": 638.6666666666666}, {"a": "2025-04-18 09:30:00", "b": 631.75}, {"a": "2025-04-18 09:35:00", "b": 625.2}, {"a": "2025-04-18 09:40:00", "b": 617.0}, {"a": "2025-04-18 09:45:00", "b": 599.0}, {"a": "2025-04-18 09:50:00", "b": 591.6}, {"a": "2025-04-18 09:55:00", "b": 592.2}, {"a": "2025-04-18 10:00:00", "b": 587.25}, {"a": "2025-04-18 10:05:00", "b": 582.0}, {"a": "2025-04-18 10:10:00", "b": 592.8}, {"a": "2025-04-18 10:15:00", "b": 587.4}, {"a": "2025-04-18 10:20:00", "b": 594.4}, {"a": "2025-04-18 10:25:00", "b": 606.0}, {"a": "2025-04-18 10:30:00", "b": 605.0}, {"a": "2025-04-18 10:35:00", "b": 610.5}, {"a": "2025-04-18 10:40:00", "b": 582.25}, {"a": "2025-04-18 10:45:00", "b": 576.4}, {"a": "2025-04-18 10:50:00", "b": 570.0}, {"a": "2025-04-18 10:55:00", "b": 573.4}, {"a": "2025-04-18 11:00:00", "b": 553.5}, {"a": "2025-04-18 11:05:00", "b": 547.25}, {"a": "2025-04-18 11:10:00", "b": 545.3333333333334}, {"a": "2025-04-18 11:15:00", "b": 540.4}, {"a": "2025-04-18 11:20:00", "b": 536.4}, {"a": "2025-04-18 11:25:00", "b": 525.4}, {"a": "2025-04-18 11:30:00", "b": 510.0}, {"a": "2025-04-18 11:35:00", "b": 493.5}, {"a": "2025-04-18 11:40:00", "b": 503.8}, {"a": "2025-04-18 11:45:00", "b": 510.75}, {"a": "2025-04-18 11:50:00", "b": 514.4}, {"a": "2025-04-18 11:55:00", "b": 529.8}, {"a": "2025-04-18 12:00:00", "b": 545.75}, {"a": "2025-04-18 12:05:00", "b": 512.2}, {"a": "2025-04-18 12:10:00", "b": 504.25}, {"a": "2025-04-18 12:15:00", "b": 506.2}, {"a": "2025-04-18 12:20:00", "b": 511.8}, {"a": "2025-04-18 12:25:00", "b": 515.5}, {"a": "2025-04-18 12:30:00", "b": 518.0}, {"a": "2025-04-18 12:35:00", "b": 516.2}, {"a": "2025-04-18 12:40:00", "b": 518.8}, {"a": "2025-04-18 12:45:00", "b": 512.0}, {"a": "2025-04-18 12:50:00", "b": 501.0}, {"a": "2025-04-18 12:55:00", "b": 498.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    