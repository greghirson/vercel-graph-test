
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-26 17:20:00", "b": 510.3333333333333}, {"a": "2024-10-26 17:25:00", "b": 520.0}, {"a": "2024-10-26 17:30:00", "b": 527.0}, {"a": "2024-10-26 17:35:00", "b": 511.0}, {"a": "2024-10-26 17:40:00", "b": 504.6}, {"a": "2024-10-26 17:45:00", "b": 510.3333333333333}, {"a": "2024-10-26 17:50:00", "b": 520.6666666666666}, {"a": "2024-10-26 17:55:00", "b": 532.8}, {"a": "2024-10-26 18:00:00", "b": 549.0}, {"a": "2024-10-26 18:05:00", "b": 561.4}, {"a": "2024-10-26 18:10:00", "b": 581.8}, {"a": "2024-10-26 18:15:00", "b": 577.5}, {"a": "2024-10-26 18:20:00", "b": 571.4}, {"a": "2024-10-26 18:25:00", "b": 558.0}, {"a": "2024-10-26 18:30:00", "b": 592.8}, {"a": "2024-10-26 18:35:00", "b": 692.6}, {"a": "2024-10-26 18:40:00", "b": 798.4}, {"a": "2024-10-26 18:45:00", "b": 839.0}, {"a": "2024-10-26 18:50:00", "b": 848.0}, {"a": "2024-10-26 18:55:00", "b": 852.6}, {"a": "2024-10-26 19:00:00", "b": 849.0}, {"a": "2024-10-26 19:05:00", "b": 842.75}, {"a": "2024-10-26 19:10:00", "b": 849.25}, {"a": "2024-10-26 19:15:00", "b": 853.6}, {"a": "2024-10-26 19:20:00", "b": 852.4}, {"a": "2024-10-26 19:25:00", "b": 844.5}, {"a": "2024-10-26 19:30:00", "b": 847.75}, {"a": "2024-10-26 19:35:00", "b": 838.6}, {"a": "2024-10-26 19:40:00", "b": 829.3333333333334}, {"a": "2024-10-26 19:45:00", "b": 838.0}, {"a": "2024-10-26 19:50:00", "b": 839.0}, {"a": "2024-10-26 19:55:00", "b": 832.5}, {"a": "2024-10-26 20:00:00", "b": 827.2}, {"a": "2024-10-26 20:05:00", "b": 869.2}, {"a": "2024-10-26 20:10:00", "b": 907.25}, {"a": "2024-10-26 20:15:00", "b": 878.6}, {"a": "2024-10-26 20:20:00", "b": 849.6}, {"a": "2024-10-26 20:25:00", "b": 827.3333333333334}, {"a": "2024-10-26 20:30:00", "b": 758.25}, {"a": "2024-10-26 20:35:00", "b": 777.6}, {"a": "2024-10-26 20:40:00", "b": 780.0}, {"a": "2024-10-26 20:45:00", "b": 769.4}, {"a": "2024-10-26 20:50:00", "b": 775.6}, {"a": "2024-10-26 20:55:00", "b": 776.8}, {"a": "2024-10-26 21:00:00", "b": 782.0}, {"a": "2024-10-26 21:05:00", "b": 797.75}, {"a": "2024-10-26 21:10:00", "b": 795.25}, {"a": "2024-10-26 21:15:00", "b": 798.5}, {"a": "2024-10-26 21:20:00", "b": 827.4}, {"a": "2024-10-26 21:25:00", "b": 820.4}, {"a": "2024-10-26 21:30:00", "b": 822.6}, {"a": "2024-10-26 21:35:00", "b": 813.4}, {"a": "2024-10-26 21:40:00", "b": 804.6666666666666}, {"a": "2024-10-26 21:45:00", "b": 791.4}, {"a": "2024-10-26 21:50:00", "b": 777.4}, {"a": "2024-10-26 21:55:00", "b": 773.0}, {"a": "2024-10-26 22:00:00", "b": 763.75}, {"a": "2024-10-26 22:05:00", "b": 765.0}, {"a": "2024-10-26 22:10:00", "b": 768.4}, {"a": "2024-10-26 22:15:00", "b": 771.0}, {"a": "2024-10-26 22:20:00", "b": 761.4}, {"a": "2024-10-26 22:25:00", "b": 751.25}, {"a": "2024-10-26 22:30:00", "b": 759.3333333333334}, {"a": "2024-10-26 22:35:00", "b": 768.0}, {"a": "2024-10-26 22:40:00", "b": 764.2}, {"a": "2024-10-26 22:45:00", "b": 774.0}, {"a": "2024-10-26 22:50:00", "b": 762.6666666666666}, {"a": "2024-10-26 22:55:00", "b": 756.5}, {"a": "2024-10-26 23:00:00", "b": 752.0}, {"a": "2024-10-26 23:05:00", "b": 756.75}, {"a": "2024-10-26 23:10:00", "b": 754.8}, {"a": "2024-10-26 23:15:00", "b": 751.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    