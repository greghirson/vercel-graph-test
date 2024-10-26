
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-26 04:40:00", "b": 563.0}, {"a": "2024-10-26 04:45:00", "b": 565.6666666666666}, {"a": "2024-10-26 04:50:00", "b": 560.25}, {"a": "2024-10-26 04:55:00", "b": 549.6}, {"a": "2024-10-26 05:00:00", "b": 547.2}, {"a": "2024-10-26 05:05:00", "b": 556.2}, {"a": "2024-10-26 05:10:00", "b": 556.0}, {"a": "2024-10-26 05:15:00", "b": 559.75}, {"a": "2024-10-26 05:20:00", "b": 544.8}, {"a": "2024-10-26 05:25:00", "b": 548.4}, {"a": "2024-10-26 05:30:00", "b": 544.8}, {"a": "2024-10-26 05:35:00", "b": 546.6}, {"a": "2024-10-26 05:40:00", "b": 551.8}, {"a": "2024-10-26 05:45:00", "b": 530.6}, {"a": "2024-10-26 05:50:00", "b": 547.4}, {"a": "2024-10-26 05:55:00", "b": 540.4}, {"a": "2024-10-26 06:00:00", "b": 530.0}, {"a": "2024-10-26 06:05:00", "b": 533.2}, {"a": "2024-10-26 06:10:00", "b": 536.25}, {"a": "2024-10-26 06:15:00", "b": 539.8}, {"a": "2024-10-26 06:20:00", "b": 543.6}, {"a": "2024-10-26 06:25:00", "b": 532.4}, {"a": "2024-10-26 06:30:00", "b": 528.25}, {"a": "2024-10-26 06:35:00", "b": 532.75}, {"a": "2024-10-26 06:40:00", "b": 533.8}, {"a": "2024-10-26 06:45:00", "b": 536.75}, {"a": "2024-10-26 06:50:00", "b": 536.2}, {"a": "2024-10-26 06:55:00", "b": 528.2}, {"a": "2024-10-26 07:00:00", "b": 519.25}, {"a": "2024-10-26 07:05:00", "b": 517.5}, {"a": "2024-10-26 07:10:00", "b": 518.75}, {"a": "2024-10-26 07:15:00", "b": 526.5}, {"a": "2024-10-26 07:20:00", "b": 518.6}, {"a": "2024-10-26 07:25:00", "b": 519.0}, {"a": "2024-10-26 07:30:00", "b": 531.25}, {"a": "2024-10-26 07:35:00", "b": 540.0}, {"a": "2024-10-26 07:40:00", "b": 543.0}, {"a": "2024-10-26 07:45:00", "b": 556.4}, {"a": "2024-10-26 07:50:00", "b": 576.2}, {"a": "2024-10-26 07:55:00", "b": 571.5}, {"a": "2024-10-26 08:00:00", "b": 574.6}, {"a": "2024-10-26 08:05:00", "b": 582.0}, {"a": "2024-10-26 08:10:00", "b": 598.2}, {"a": "2024-10-26 08:15:00", "b": 605.6666666666666}, {"a": "2024-10-26 08:20:00", "b": 601.75}, {"a": "2024-10-26 08:25:00", "b": 597.3333333333334}, {"a": "2024-10-26 08:30:00", "b": 597.8}, {"a": "2024-10-26 08:35:00", "b": 614.0}, {"a": "2024-10-26 08:40:00", "b": 619.4}, {"a": "2024-10-26 08:45:00", "b": 628.0}, {"a": "2024-10-26 08:50:00", "b": 630.25}, {"a": "2024-10-26 08:55:00", "b": 639.2}, {"a": "2024-10-26 09:00:00", "b": 635.8}, {"a": "2024-10-26 09:05:00", "b": 638.2}, {"a": "2024-10-26 09:10:00", "b": 649.8}, {"a": "2024-10-26 09:15:00", "b": 666.75}, {"a": "2024-10-26 09:20:00", "b": 681.0}, {"a": "2024-10-26 09:25:00", "b": 685.8}, {"a": "2024-10-26 09:30:00", "b": 681.4}, {"a": "2024-10-26 09:35:00", "b": 696.5}, {"a": "2024-10-26 09:40:00", "b": 699.0}, {"a": "2024-10-26 09:45:00", "b": 706.2}, {"a": "2024-10-26 09:50:00", "b": 714.6}, {"a": "2024-10-26 09:55:00", "b": 701.2}, {"a": "2024-10-26 10:00:00", "b": 686.0}, {"a": "2024-10-26 10:05:00", "b": 688.8}, {"a": "2024-10-26 10:10:00", "b": 678.6}, {"a": "2024-10-26 10:15:00", "b": 690.6666666666666}, {"a": "2024-10-26 10:20:00", "b": 697.6}, {"a": "2024-10-26 10:25:00", "b": 685.4}, {"a": "2024-10-26 10:30:00", "b": 687.0}, {"a": "2024-10-26 10:35:00", "b": 710.75}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    