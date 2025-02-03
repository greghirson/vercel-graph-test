
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-02 23:00:00", "b": 699.4}, {"a": "2025-02-02 23:05:00", "b": 701.8}, {"a": "2025-02-02 23:10:00", "b": 709.6}, {"a": "2025-02-02 23:15:00", "b": 705.3333333333334}, {"a": "2025-02-02 23:20:00", "b": 690.75}, {"a": "2025-02-02 23:25:00", "b": 691.75}, {"a": "2025-02-02 23:30:00", "b": 680.5}, {"a": "2025-02-02 23:35:00", "b": 675.0}, {"a": "2025-02-02 23:40:00", "b": 666.0}, {"a": "2025-02-02 23:45:00", "b": 670.0}, {"a": "2025-02-02 23:50:00", "b": 667.4}, {"a": "2025-02-02 23:55:00", "b": 663.8}, {"a": "2025-02-03 00:00:00", "b": 659.8}, {"a": "2025-02-03 00:05:00", "b": 653.6}, {"a": "2025-02-03 00:10:00", "b": 646.4}, {"a": "2025-02-03 00:15:00", "b": 648.5}, {"a": "2025-02-03 00:20:00", "b": 643.8}, {"a": "2025-02-03 00:25:00", "b": 637.6}, {"a": "2025-02-03 00:30:00", "b": 631.25}, {"a": "2025-02-03 00:35:00", "b": 632.0}, {"a": "2025-02-03 00:40:00", "b": 620.0}, {"a": "2025-02-03 00:45:00", "b": 605.2}, {"a": "2025-02-03 00:50:00", "b": 608.6}, {"a": "2025-02-03 00:55:00", "b": 610.4}, {"a": "2025-02-03 01:00:00", "b": 617.2}, {"a": "2025-02-03 01:05:00", "b": 606.6666666666666}, {"a": "2025-02-03 01:10:00", "b": 599.6}, {"a": "2025-02-03 01:15:00", "b": 592.8}, {"a": "2025-02-03 01:20:00", "b": 588.8}, {"a": "2025-02-03 01:25:00", "b": 586.6}, {"a": "2025-02-03 01:30:00", "b": 585.5}, {"a": "2025-02-03 01:35:00", "b": 592.2}, {"a": "2025-02-03 01:40:00", "b": 589.0}, {"a": "2025-02-03 01:45:00", "b": 580.2}, {"a": "2025-02-03 01:50:00", "b": 567.8}, {"a": "2025-02-03 01:55:00", "b": 576.2}, {"a": "2025-02-03 02:00:00", "b": 579.6666666666666}, {"a": "2025-02-03 02:05:00", "b": 573.5}, {"a": "2025-02-03 02:10:00", "b": 561.0}, {"a": "2025-02-03 02:15:00", "b": 558.4}, {"a": "2025-02-03 02:20:00", "b": 567.6}, {"a": "2025-02-03 02:25:00", "b": 555.0}, {"a": "2025-02-03 02:30:00", "b": 548.0}, {"a": "2025-02-03 02:35:00", "b": 548.2}, {"a": "2025-02-03 02:40:00", "b": 535.0}, {"a": "2025-02-03 02:45:00", "b": 536.3333333333334}, {"a": "2025-02-03 02:50:00", "b": 544.75}, {"a": "2025-02-03 02:55:00", "b": 550.2}, {"a": "2025-02-03 03:00:00", "b": 542.0}, {"a": "2025-02-03 03:05:00", "b": 532.8}, {"a": "2025-02-03 03:10:00", "b": 535.5}, {"a": "2025-02-03 03:15:00", "b": 532.0}, {"a": "2025-02-03 03:20:00", "b": 537.0}, {"a": "2025-02-03 03:25:00", "b": 532.75}, {"a": "2025-02-03 03:30:00", "b": 523.8}, {"a": "2025-02-03 03:35:00", "b": 529.25}, {"a": "2025-02-03 03:40:00", "b": 512.0}, {"a": "2025-02-03 03:45:00", "b": 510.8}, {"a": "2025-02-03 03:50:00", "b": 515.6}, {"a": "2025-02-03 03:55:00", "b": 504.25}, {"a": "2025-02-03 04:00:00", "b": 496.75}, {"a": "2025-02-03 04:05:00", "b": 503.4}, {"a": "2025-02-03 04:10:00", "b": 488.0}, {"a": "2025-02-03 04:15:00", "b": 494.0}, {"a": "2025-02-03 04:20:00", "b": 496.4}, {"a": "2025-02-03 04:25:00", "b": 492.25}, {"a": "2025-02-03 04:30:00", "b": 490.6}, {"a": "2025-02-03 04:35:00", "b": 497.4}, {"a": "2025-02-03 04:40:00", "b": 482.0}, {"a": "2025-02-03 04:45:00", "b": 467.2}, {"a": "2025-02-03 04:50:00", "b": 462.4}, {"a": "2025-02-03 04:55:00", "b": 468.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    